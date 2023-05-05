// hook
import { useRef } from 'react';
import { useMount, useUpdateEffect } from 'react-use';
import { useTheme } from '@mui/material';


// quillRef Library
import Quill from 'quill';
/* We don't need to  import 'quill/dist/quill.snow.css' because we have created Styled Component (<CSS_FOR_QUILL_EDITOR____STYLED/>) to replace it.  */


// highlightJS library
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/monokai-sublime.css';

// styled-components
import { CSS_FOR_QUILL_EDITOR____STYLED } from '@/styles/styled-components/quill/quill';

// components
import { Box } from '@mui/material';
import WYSIWYG_TOOLBAR___COMPONENT from './wysiwyg-toolbar/wysiwyg-toolbar';




/*  🍔 importing and registering the 'quill-image-resize' library 🍔 */

import ImageResize  from 'quill-image-resize'


// assigning the Quill object to the window object to make it globally 
window.Quill = Quill


// registering the ImageResize module with the Quill object using the Quill.register() method
Quill.register({
    'modules/imageResize': ImageResize,
})


/*  🍔 importing and registering font  */
let fonts = Quill.import("attributors/style/font");
fonts.whitelist = ["sans-serif", "serif", "monospace"];
Quill.register(fonts, true);


/*  🍔 importing and registering font size but I have no intension to use font size now. Heading is enough!  */
// importing font size, But I have no intension to use font size now.
const fontSizeArr = ['10px', '11px', '12px', '14px', '18px', '24px'];
var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function WYSIWYG___COMPONENT({
    quillRef,
    wysiwyg_initial_state,
    wysiwyg_state,
    update_wysiwyg_state,
    display_these_toolbar_options_in_the_parent_form,
    state_of_parent_form
}) {

    // mui theme 
    const theme = useTheme()



    // quill editor's reference
    const quillEditorRef = useRef(null);




    /* When the component first mounts,  setting up the Quill editor and performing various tasks, such as setting up different modules, theme.*/
    useMount(() => {

        quillRef.current = new Quill(quillEditorRef.current, {

            modules: {


                toolbar: true,

                syntax: {
                    highlight: function (highlight_code_param) {
                        return hljs.highlightAuto(highlight_code_param).value;
                    },
                },


                history: {

                    delay: 1000,
              
                    maxStack: 500,

                    userOnly: false

                },



                imageResize: {

                    // this is needed, I don't know why!
                    parchment: Quill.import('parchment'),

                    modules: ['Resize', 'DisplaySize'],


                    handleStyles: {
                        backgroundColor: theme.palette.primary.main,
                        border: `0.3rem solid ${theme.palette.primary.main}`
                    },


                    displayStyles: {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.opposite_theme.primary
                    }


                }


            },

            theme: 'snow'
        })



    })




    // updating 'quill_generated_html' property of the 'wysiwyg_state' state
    useUpdateEffect(() => {

        quillRef.current.on('text-change', function (delta, oldDelta, source) {

            update_wysiwyg_state(draft => {
                draft.quill_generated_html = quillRef.current.root.innerHTML
            })

        })

    }, [quillRef.current])


    // updating 'editor_cursor' property of the 'wysiwyg_state' state
    useUpdateEffect(() => {


        const update_cursor_position_on_selection_change = (range, oldRange, source) => {

            if (range) {

                update_wysiwyg_state(draft => {
                    draft.editor_cursor.position = range.index;
                    draft.editor_cursor.selection_length = range.length;
                })

            }
        }



        const update_cursor_position_on_text_change = (delta, oldDelta, source) => {

            let position = 0;

            delta.forEach(op => {

                if (op.retain) {
                    position += op.retain;
                } else if (op.insert) {
                    position += op.insert.length;
                } else if (op.delete) {
                    position -= op.delete;
                }

            })

            // Ensure position is never negative
            position = position < 0 ? 0 : position;


            update_wysiwyg_state(draft => {
                draft.editor_cursor.position = position
                draft.editor_cursor.selection_length = 0 // when text changes, we are not selecting, so length will be 0
            })
        }



        // Listen for selection change and text change events
        quillRef.current.on('selection-change', update_cursor_position_on_selection_change);
        quillRef.current.on('text-change', update_cursor_position_on_text_change);



        // Remove event listeners on cleanup
        return () => {
            quillRef.current.off('selection-change', update_cursor_position_on_selection_change);
            quillRef.current.off('text-change', update_cursor_position_on_text_change);


            console.log('Cleaning up');
        }


    }, [quillRef.current]);





    // updating the 'images.all_inserted_images_link' value of the wysiwyg_state when 'quill_generated_html' value of wysiwyg_state changes
    useUpdateEffect(() => {

        // array of all the image tag from the generated html
        const imageTagArray = wysiwyg_state.quill_generated_html.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/g) || [];

        // array of all the images link from the generated html
        const imageSourceArray = imageTagArray.map(link => link.match(/src=["']([^"']+)["']/)[1]);


        // updating the 'images.all_inserted_images_link' value of the wysiwyg_state
        if (imageSourceArray) {

            update_wysiwyg_state(draft => {



                draft.images.all_inserted_images_link = [...imageSourceArray]

            })

        }


    }, [wysiwyg_state.quill_generated_html])



    // updating the 'images.all_removed_images_link' value of the wysiwyg_state when 'images.all_inserted_images_link' value of wysiwyg_state changes
    useUpdateEffect(() => {

        // updating the 'images.all_removed_images_link' value of the wysiwyg_state 
        update_wysiwyg_state(draft => {

            draft.images.all_removed_images_link = draft.images.all_uploaded_images_link.filter(element => !draft.images.all_inserted_images_link.includes(element));

        })

    }, [wysiwyg_state.images.all_inserted_images_link])









    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <Box>

            {/*making the toolbar sticky at top when we scroll down */}
            <Box sx={{ position: 'sticky', top: 0, zIndex: 999 }} >

                <WYSIWYG_TOOLBAR___COMPONENT
                    quillRef={quillRef}
                    display_these_toolbar_options_in_the_parent_form={display_these_toolbar_options_in_the_parent_form}

                    wysiwyg_initial_state={wysiwyg_initial_state}
                    wysiwyg_state={wysiwyg_state}
                    update_wysiwyg_state={update_wysiwyg_state}
                />

            </Box>

            <CSS_FOR_QUILL_EDITOR____STYLED>

                {/* Editor */}
                <Box ref={quillEditorRef}>
                </Box>

            </CSS_FOR_QUILL_EDITOR____STYLED>


        </Box>

    )
}















