
// hook
import { useLogger, useMount, useUpdateEffect } from "react-use";
import { useImmer } from "use-immer";
import { useMediaQuery, useTheme } from '@mui/material'




// api
import { useUploadImage } from "@/api/upload-image.js";


// color-picker library
import { ChromePicker } from 'react-color';


// styled-components
import { styled } from '@mui/material/styles';
import media_queries from "@/utils/media-queries/media-queries";


// icons
import {
    ExpandMore,
    ExpandLess,
    UndoRounded,
    RedoRounded,
    FormatBoldRounded,
    FormatItalicRounded,
    FormatUnderlinedRounded,
    FormatStrikethroughRounded,
    FormatListNumberedRounded,
    FormatListBulletedRounded,
    FormatAlignLeftRounded,
    FormatAlignRightRounded,
    FormatAlignCenterRounded,
    FormatAlignJustifyRounded,
    FormatIndentDecreaseRounded,
    FormatIndentIncreaseRounded,
    FormatTextdirectionLToRRounded,
    FormatTextdirectionRToLRounded,
    FormatQuoteRounded,
    CodeRounded,
    FormatColorTextRounded,
    FormatColorFillRounded,
    LinkRounded,
    ImageRounded,
    YouTube,
    SubscriptRounded,
    SuperscriptRounded,
    FormatClearRounded
} from "@mui/icons-material";

// components
import { Button, Select, MenuItem, FormControl, IconButton, Tooltip, Box, Divider, Popover, Modal, TextField, Typography } from '@mui/material';


import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner.jsx";
import useFormManagement from "@/utils/global-hooks/use-form-management";
import MUI_IMAGE___COMPONENT from "../../../mui-image";





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function WYSIWYG_TOOLBAR___COMPONENT({ quillRef, display_these_toolbar_options_in_the_parent_form, wysiwyg_initial_state, wysiwyg_state, update_wysiwyg_state }) {



    /* Updating the wysiwyg_state.formats_of_selected_text value on selection-change */
    useUpdateEffect(() => {

        // Add event listener to the Quill instance for selection changes
        quillRef.current.on('selection-change', (range, oldRange, source) => {

            // We want to update state only when a selection exists
            if (range) {
                // Get the formatting options of the selected text
                const format = quillRef.current.getFormat(range.index, range.length);
                // Update the state with the formatting options of the selected text

                update_wysiwyg_state(draft => {

                    draft.formats_of_selected_text = { ...wysiwyg_initial_state.formats_of_selected_text, ...format }
                })





            }


            else {
                // If no text is selected, reset the value to its initial state
                update_wysiwyg_state(draft => {

                    draft.formats_of_selected_text = { ...wysiwyg_initial_state.formats_of_selected_text }
                })


            }

        })


    }, [quillRef.current]);








    /* 🍔🍔 toolbar options 🍔🍔 */

    const toolbar_all_options = [


        {
            name: 'clear_format',
            component: CLEAR_FORMAT___SECTION
        },


        {
            name: 'undo',
            component: UNDO___SECTION
        },

        {
            name: 'redo',
            component: REDO___SECTION
        },

        {
            name: 'font',
            component: FONT___SECTION
        },

        {
            name: 'header',
            component: HEADER___SECTION
        },

        {
            name: 'bold',
            component: BOLD___SECTION
        },

        {
            name: 'italic',
            component: ITALIC___SECTION
        },

        {
            name: 'underline',
            component: UNDERLINE___SECTION
        },

        {
            name: 'strikethrough',
            component: STRIKE_THROUGH___SECTION
        },


        {
            name: 'numbered_list',
            component: ORDERED_LIST___SECTION
        },


        {
            name: 'bulleted_list',
            component: UNORDERED_LIST___SECTION
        },

        {
            name: 'align',
            component: ALIGN___SECTION
        },

        {
            name: 'decrease_indent',
            component: DECREASE_INDENT___SECTION
        },


        {
            name: 'increase_indent',
            component: INCREASE_INDENT___SECTION
        },


        {
            name: 'direction',
            component: DIRECTION___SECTION
        },


        {
            name: 'blockquote',
            component: BLOCKQUOTE___SECTION
        },



        {
            name: 'code_block',
            component: CODE_BLOCK___SECTION
        },


        {
            name: 'text_color',
            component: TEXT_COLOR___SECTION
        },

        {
            name: 'highlight_color',
            component: HIGHLIGHT_COLOR___SECTION
        },

        {
            name: 'link',
            component: LINK___SECTION
        },

        {
            name: 'image',
            component: IMAGE___SECTION
        },


        {
            name: 'embed_youtube_video',
            component: EMBED_YOUTUBE_VIDEO___SECTION
        },

        {
            name: 'sub_script',
            component: SUB_SCRIPT___SECTION
        },


        {
            name: 'super_script',
            component: SUPER_SCRIPT___SECTION
        },


        /* We don't have any plan to use the following component right now */

        {
            name: 'base64_image',
            component: BASE64_IMAGE___SECTION
        }


        /*⚠️⚠️⚠️  I have just skipped 1 toolbar option, that is 'formula'. In no way, currently I need it! So, I am not in hurry to add it. Read the documentation, I will maybe need an additional library to install for formula, it's called 'katex'. Maybe, the setup is kind of like the syntax highlighter setup. I am not sure actually, explore in the future when you have time!
        
        One more thing I want to say is that, for formula, on click on the option we will open a modal, just like embedding video option. 


        There additionally, I may have keyboard for formulas! That will be great. Check this out: https://justamouse.com/mathquill4quill/", I am talking about this.

        Just like for color option, we have added a separate library to pick color, we can do that for formula as well!
        
        */

    ]



    /* 🍔🍔 feature of showing and hiding toolbar options  🍔🍔 */


    // get the current theme object
    const theme = useTheme();

    // set media query hooks for phone, tablet and laptop screen sizes
    const phone_and_up = useMediaQuery(theme.breakpoints.down('sm'))
    const tablet_and_up = useMediaQuery(theme.breakpoints.down('lg'))

    // set default item count based on screen size
    let defaultItemCount

    if (phone_and_up) {
        // if on phone, show at most 5 items (at most 2 lines)
        defaultItemCount = 5
    }
    else if (tablet_and_up) {
        // if on tablet, show at most 7 items (at most 2 lines)
        defaultItemCount = 7
    }
    else {
        // if on laptop or larger, show at most 7 items (at most 1 line)
        defaultItemCount = 7
    }

    // set state to control whether to show all toolbar items or not
    const [showMore, updateShowMore] = useImmer(false);

    // calculate the number of items that should be hidden
    const hiddenItemCount = display_these_toolbar_options_in_the_parent_form.length - defaultItemCount;

    // toggle the state of showMore when the button is clicked
    const handleClick = () => {
        updateShowMore(!showMore)
    }



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/

    return (
        <Box sx={{
            paddingRight: '1rem',
            paddingLeft: '1rem',


            backgroundColor: 'background.variation_2',

            /* the following box shadow is set as a complementary of the quill editor's(.ql-editor) box shadow  */
            boxShadow: `0px 0px 2px 2px ${theme.palette.divider}`,

            display: 'flex',
            columnGap: '0.3rem',
            rowGap: '0rem',
            flexWrap: 'wrap',
            alignItems: 'center',

        }}>
            {/* render only the default number of toolbar items */}
            {display_these_toolbar_options_in_the_parent_form.slice(0, defaultItemCount).map(option_string => {
                const found_option = toolbar_all_options.find(option_obj => option_obj.name === option_string);
                const JSX = found_option ? (
                    <>
                        <found_option.component
                            sx={{ width: '100%' }}
                            quillRef={quillRef}
                            wysiwyg_initial_state={wysiwyg_initial_state}
                            wysiwyg_state={wysiwyg_state}
                            update_wysiwyg_state={update_wysiwyg_state}

                        />
                        <Divider orientation="vertical" variant="middle" flexItem />
                    </>
                ) : null;
                return JSX;
            })}

            {/* render the hidden toolbar items only when showMore is true */}
            {showMore && display_these_toolbar_options_in_the_parent_form.slice(defaultItemCount).map(option_string => {
                const found_option = toolbar_all_options.find(option_obj => option_obj.name === option_string);
                const JSX = found_option ? (
                    <>
                        <found_option.component
                            sx={{ width: '100%' }}
                            quillRef={quillRef}
                            wysiwyg_initial_state={wysiwyg_initial_state}
                            wysiwyg_state={wysiwyg_state}
                            update_wysiwyg_state={update_wysiwyg_state}
                        />
                        <Divider orientation="vertical" variant="middle" flexItem />
                    </>
                ) : null;
                return JSX;
            })}

            {/* show the "More" button when not all items are shown */}
            {!showMore && hiddenItemCount > 0 && (
                <Button onClick={handleClick} variant='text' size='small' sx={{ fontSize: 'overline.fontSize' }}>
                    <ExpandMore /> More
                </Button>
            )}

            {/* show the "Less" button when all items are shown */}
            {showMore && (
                <Button onClick={handleClick} variant='text' size='small' sx={{ fontSize: 'overline.fontSize' }}>
                    <ExpandLess /> Less
                </Button>
            )}
        </Box>
    );
}






/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/



const FONT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleFont = (event) => {

        const selectedValue = event.target.value;

        quillRef.current.format('font', selectedValue);


        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.font = selectedValue
        })

    }



    return (

        <Tooltip title="Font" placement="top">
 

            <FormControl sx={{ minWidth: '6.3rem' }} margin='dense'>

                <SELECT___STYLED
                    onChange={(event) => handleFont(event)}
                    value={wysiwyg_state.formats_of_selected_text.font}
                    sx={{
                        color: wysiwyg_state.formats_of_selected_text.font === 'sans-serif' ? 'text.primary' : 'error.dark',


                        '.MuiSelect-select': {
                            paddingBottom: '0.05rem',
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                        },
                    }}
                >

                    {/* We have only added the fonts here that we have whitelisted and registered */}
                    <MENU_ITEM___STYLED value="sans-serif">Sans Serif</MENU_ITEM___STYLED>

                    <MENU_ITEM___STYLED value="serif">Serif</MENU_ITEM___STYLED>

                    <MENU_ITEM___STYLED value="monospace">MonoSpace</MENU_ITEM___STYLED>

                </SELECT___STYLED>
            </FormControl>
        </Tooltip>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/

const HEADER___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleHeader = (event) => {

        const selectedValue = event.target.value;

        const headerFormat = selectedValue === 0 ? false : selectedValue;

        quillRef.current.format('header', headerFormat);

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.header = selectedValue
        })
    }

    return (

        <Tooltip title="Heading" placement="top">

            <FormControl sx={{ minWidth: '6rem' }} margin='dense'>

                <SELECT___STYLED
                    onChange={handleHeader}
                    value={wysiwyg_state.formats_of_selected_text.header}
                    sx={{
                        color: wysiwyg_state.formats_of_selected_text.font === 0 ? 'text.primary' : 'error.dark',

                        '.MuiSelect-select': {
                            paddingBottom: '0.05rem',
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                        },
                    }}>

                    <MENU_ITEM___STYLED value={0}>Normal</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={1}>Heading 1</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={2}>Heading 2</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={3}>Heading 3</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={4}>Heading 4</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={5}>Heading 5</MENU_ITEM___STYLED>
                    <MENU_ITEM___STYLED value={6}>Heading 6</MENU_ITEM___STYLED>

                </SELECT___STYLED>

            </FormControl>

        </Tooltip>

    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const BOLD___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleBold = () => {

        const isBold = quillRef.current.getFormat().bold;

        if (isBold) {
            quillRef.current.format('bold', false);
        } else {
            quillRef.current.format('bold', true);
        }

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.bold = !draft.formats_of_selected_text.bold
        })
    }

    return (
        <Tooltip title="Bold" placement="top">
            <FormControl margin='dense'>
                <IconButton onClick={handleBold}>
                    <FormatBoldRounded sx={(theme) => ({

                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.bold ? theme.palette.error.dark : theme.palette.text.primary

                    })} />
                </IconButton>
            </FormControl>
        </Tooltip>
    )
}



/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const ITALIC___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleItalic = () => {
        const isItalic = quillRef.current.getFormat().italic;

        if (isItalic) {
            quillRef.current.format('italic', false);
        } else {
            quillRef.current.format('italic', true);
        }

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.italic = !draft.formats_of_selected_text.italic
        })
    }


    return (
        <Tooltip title="Italic" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleItalic}>

                    <FormatItalicRounded sx={(theme) => ({

                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.italic ? theme.palette.error.dark : theme.palette.text.primary
                    })} />
                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/



const UNDERLINE___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleUnderline = () => {
        const isUnderline = quillRef.current.getFormat().underline;

        if (isUnderline) {
            quillRef.current.format('underline', false);
        } else {
            quillRef.current.format('underline', true);
        }

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.underline = !draft.formats_of_selected_text.underline
        })
    }


    return (

        <Tooltip title="Underline" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleUnderline}>

                    <FormatUnderlinedRounded sx={(theme) => ({

                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.underline ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const STRIKE_THROUGH___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleStrikeThrough = () => {

        const isStrikeThrough = quillRef.current.getFormat().strike;

        if (isStrikeThrough) {
            quillRef.current.format('strike', false);
        } else {
            quillRef.current.format('strike', true);
        }

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.strike = !draft.formats_of_selected_text.strike
        })
    }


    return (

        <Tooltip title="Strikethrough" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleStrikeThrough}>

                    <FormatStrikethroughRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.strike ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/

const ORDERED_LIST___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    /* ⚠️⚠️⚠️ Fix this bug in the future!
    
     - Suppose, we have selected a text and changed its heading to anything else than 'normal' or before selecting the text, the text already had heading anything other than 'normal'

     - Now, after selecting the text, when we make it a ordered list, the text becomes a list, also the heading becomes 'normal'.
     
     - But until we remove our cursor or selection, it will not indicate in the toolbar that the text has 'normal'  heading 

     - To fix this issue, I tried what I did in the <CLEAR_FORMAT___SECTION/> by using useUpdateEffect but it's not working perfectly

     - Maybe it's not working because when I make the text a list, the selections goes away. Think about it in the future!

  
    
    */


    const handleOrderedList = () => {

        const isOrdered = quillRef.current.getFormat().list === 'ordered'

        if (isOrdered) {
            quillRef.current.format('list', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.list = false
            })

        } else {
            quillRef.current.format('list', 'ordered');

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.list = 'ordered'
            })

        }


    }


    return (

        <Tooltip title="Ordered List" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleOrderedList}>

                    <FormatListNumberedRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.list === 'ordered' ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const UNORDERED_LIST___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const handleUnorderedList = () => {

        const isBulleted = quillRef.current.getFormat().list === 'bullet'

        if (isBulleted) {
            quillRef.current.format('list', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.list = false
            })

        }

        else {
            quillRef.current.format('list', 'bullet');

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.list = 'bullet'
            })
        }

    }


    return (

        <Tooltip title="Bullet List" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleUnorderedList}>

                    <FormatListBulletedRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.list === 'bullet' ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const ALIGN___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleAlign = (event) => {
        const selectedValue = event.target.value;

        quillRef.current.format('align', selectedValue)

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.align = selectedValue
        })
    }


    return (

        <Tooltip title="Align Text" placement="top">

            <FormControl sx={{ minWidth: '3rem' }} margin='dense'>

                <SELECT___STYLED
                    onChange={handleAlign}
                    value={wysiwyg_state.formats_of_selected_text.align}

                    sx={{
                        color: wysiwyg_state.formats_of_selected_text.align === false ? 'text.primary' : 'error.dark',

                        '.MuiSelect-select': {
                            paddingBottom: '0.05rem',
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                        },


                    }}

                    // controlling the styles of menus with MenuProps
                    MenuProps={{
                        MenuListProps: {
                            sx: {
                                padding: '0rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                paddingTop: '0rem',
                                paddingBottom: '0rem'
                            },
                        },
                    }}>


                    <MENU_ITEM___STYLED value={false}>
                        <Tooltip title="Left" placement="bottom" arrow>
                            <FormatAlignLeftRounded sx={{ fontSize: '1.1rem' }} />
                        </Tooltip>
                    </MENU_ITEM___STYLED>


                    <MENU_ITEM___STYLED value='center'>
                        <Tooltip title="Center" placement="bottom" arrow>
                            <FormatAlignCenterRounded sx={{ fontSize: '1.1rem' }} />
                        </Tooltip>
                    </MENU_ITEM___STYLED>


                    <MENU_ITEM___STYLED value='right'>
                        <Tooltip title="Right" placement="bottom" arrow>
                            <FormatAlignRightRounded sx={{ fontSize: '1.1rem' }} />
                        </Tooltip>
                    </MENU_ITEM___STYLED>



                    <MENU_ITEM___STYLED value='justify'>
                        <Tooltip title="Justify" placement="bottom" arrow>
                            <FormatAlignJustifyRounded sx={{ fontSize: '1.1rem' }} />
                        </Tooltip>
                    </MENU_ITEM___STYLED>


                </SELECT___STYLED>

            </FormControl>
        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const DECREASE_INDENT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const handleIndent = () => {

        let indent = quillRef.current.getFormat().indent;

        let current_indent = typeof indent === 'undefined' ? 0 : indent

        let new_indent

        if (current_indent === 0) {
            new_indent = current_indent
        }
        else {
            new_indent = current_indent - 1
        }


        quillRef.current.format('indent', new_indent);

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.indent = new_indent;
        })
    }



    return (

        <Tooltip title="Decrease Indent" placement="top">

            <FormControl margin="dense">

                <IconButton onClick={handleIndent}>

                    {/* Decrease Indent's icon is depending on the direction state, if the direction is 'rtl', the icon must be different. */}

                    {wysiwyg_state.formats_of_selected_text.direction === 'rtl' ?

                        /* this icon will be used only when the direction is 'rtl' (for example while writing arabic)*/
                        <FormatIndentIncreaseRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />

                        :

                        /* normally, this icon will be used */
                        <FormatIndentDecreaseRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />

                    }

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/

const INCREASE_INDENT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const handleIndent = () => {

        let indent = quillRef.current.getFormat().indent;

        let current_indent = typeof indent === 'undefined' ? 0 : indent

        let new_indent

        // setting 7 to be the maximum level of indent
        if (current_indent === 7) {
            new_indent = current_indent
        }
        else {
            new_indent = current_indent + 1
        }


        quillRef.current.format('indent', new_indent);

        update_wysiwyg_state(draft => {
            draft.formats_of_selected_text.indent = new_indent;
        })
    }



    return (
        /* Normally, it's a increase indent but when the direction is 'rtl', it will be a decrease indent. */
        <Tooltip title='Increase Indent' placement="top">

            <FormControl margin="dense">

                <IconButton onClick={handleIndent}>


                    {/* Increase Indent's icon is depending on the direction state, if the direction is 'rtl', the icon must be different.  */}

                    {wysiwyg_state.formats_of_selected_text.direction === 'rtl' ?

                        /* this icon will be used only when the direction is 'rtl' (for example while writing arabic)*/
                        <FormatIndentDecreaseRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />

                        :

                        /* normally, this icon will be used */
                        <FormatIndentIncreaseRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />

                    }

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const DIRECTION___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const handleDirection = () => {

        const direction = quillRef.current.getFormat().direction;

        if (direction === 'rtl') {

            quillRef.current.format('direction', false);

            // also need to change the align, false means left
            quillRef.current.format('align', false);


            //  updating the state as well
            update_wysiwyg_state(draft => {

                draft.formats_of_selected_text.direction = false

                draft.formats_of_selected_text.align = false
            })


        } else {


            quillRef.current.format('direction', 'rtl');

            // also need to change the align
            quillRef.current.format('align', 'right');


            //  updating the state as well
            update_wysiwyg_state(draft => {

                draft.formats_of_selected_text.direction = 'rtl'

                draft.formats_of_selected_text.align = 'right'
            })
        }

    }


    return (
        <Tooltip title="Direction" placement="top">
            <FormControl margin='dense'>
                <IconButton onClick={handleDirection}>

                    {wysiwyg_state.formats_of_selected_text.direction === 'rtl' ?

                        <FormatTextdirectionRToLRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                            color: theme.palette.error.dark
                        })} />

                        :

                        <FormatTextdirectionLToRRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                            color: theme.palette.text.primary
                        })} />

                    }

                </IconButton>
            </FormControl>
        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const BLOCKQUOTE___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleBlockQuote = () => {

        const isBlockQuote = quillRef.current.getFormat().blockquote

        if (isBlockQuote) {
            quillRef.current.format('blockquote', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.blockquote = false
            })
        }

        else {
            quillRef.current.format('blockquote', true);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.blockquote = true
            })
        }
    }

    return (
        <Tooltip title="Blockquote" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleBlockQuote}>

                    <FormatQuoteRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.blockquote ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const CODE_BLOCK___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleCodeBlock = () => {

        const isCodeBlock = quillRef.current.getFormat()['code-block']

        if (isCodeBlock) {
            quillRef.current.format('code-block', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text['code-block'] = false
            })
        }

        else {


            quillRef.current.format('code-block', true);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text['code-block'] = true
            })
        }
    }

    return (
        <Tooltip title="Code Block" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleCodeBlock}>

                    <CodeRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text['code-block'] ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const TEXT_COLOR___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const [anchorEl, updateAnchorEl] = useImmer(null);

    const handleOpenPopover = (event) => {
        updateAnchorEl(event.currentTarget);
    }

    const handleClosePopover = () => {
        updateAnchorEl(null);
    }

    const handleColorChange = (color) => {

        const hexColor = color.hex;

        quillRef.current.format('color', hexColor);

        update_wysiwyg_state((draft) => {
            draft.formats_of_selected_text.color = hexColor;
        })
    }


    return (
        <>
            <Tooltip title="Text Color" placement="top">
                <FormControl margin="dense">
                    <IconButton onClick={handleOpenPopover}>
                        <FormatColorTextRounded
                            sx={(theme) => ({

                                // as we are using boxShadow, we are reducing the size of the icon than usual
                                fontSize: '1rem',
                                boxShadow: `0px 0px 2px 2px ${wysiwyg_state.formats_of_selected_text.color ? wysiwyg_state.formats_of_selected_text.color : theme.palette.text.primary}`,
                            })}
                        />
                    </IconButton>
                </FormControl>
            </Tooltip>


            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <ChromePicker color={wysiwyg_state.formats_of_selected_text.color} onChange={handleColorChange} disableAlpha={true} />
            </Popover>
        </>
    );
};


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const HIGHLIGHT_COLOR___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const [anchorEl, updateAnchorEl] = useImmer(null);

    const handleOpenPopover = (event) => {
        updateAnchorEl(event.currentTarget);
    }

    const handleClosePopover = () => {
        updateAnchorEl(null);
    }

    const handleColorChange = (color) => {

        const hexColor = color.hex;

        quillRef.current.format('background', hexColor);

        update_wysiwyg_state((draft) => {
            draft.formats_of_selected_text.background = hexColor;
        })
    }


    return (
        <>

            <Tooltip title="Highlight Color" placement="top">
                <FormControl margin="dense">
                    <IconButton onClick={handleOpenPopover}>
                        <FormatColorFillRounded
                            sx={(theme) => ({

                                // as we are using boxShadow, we are reducing the size of the icon than usual
                                fontSize: '1rem',
                                boxShadow: `0px 0px 2px 2px ${wysiwyg_state.formats_of_selected_text.background ? wysiwyg_state.formats_of_selected_text.background : theme.palette.text.primary}`
                            })}
                        />
                    </IconButton>
                </FormControl>
            </Tooltip>


            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <ChromePicker color={wysiwyg_state.formats_of_selected_text.background} onChange={handleColorChange} disableAlpha={true} />
            </Popover>


        </>
    );
};


/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/



const LINK___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {



    // state to handle all the possible changes of this component
    const initial_state = {

        open_modal: false,

        text_is_selected: false,

        link_already_exist: false,

        link: ''
    }


    const [link_state, update_link_state] = useImmer(initial_state)



    const handle_click_on_the_link_button = () => {

        // if link already exists
        if (wysiwyg_state.formats_of_selected_text.link.length > 0) {

            update_link_state(draft => {
                draft.link_already_exist = true
                draft.open_modal = true
            })

        }

        // if link doesn't already exist
        else {


            const selected_text = quillRef.current.getSelection()

            // check if the user has selected any text or not
            if (selected_text && selected_text.length > 0) {

                update_link_state(draft => {
                    draft.text_is_selected = true
                    draft.open_modal = true
                })

            }

            // if user haven't selected any text
            else {
                update_link_state(draft => {
                    draft.text_is_selected = false
                    draft.open_modal = true
                })
            }

        }


    }


    const handle_input_change = (e) => {

        update_link_state(draft => {
            draft.link = e.target.value;
        })
    }


    //  when a user submits the link, the following function gets triggered
    const handle_submit = () => {

        quillRef.current.format('link', link_state.link)

        update_wysiwyg_state(draft => {

            draft.formats_of_selected_text.link = link_state.link
        })


        update_link_state(draft => {

            // closing the modal
            draft.open_modal = false

        })
    }


    const handle_modal_close = () => {

        // when the modal closes, change the state back to initial values
        update_link_state(initial_state)
    }



    return (
        <>
            <Tooltip title="Link" placement="top">

                <FormControl margin='dense'>

                    <IconButton onClick={handle_click_on_the_link_button} >

                        <LinkRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                            color: wysiwyg_state.formats_of_selected_text.link ? theme.palette.error.dark : theme.palette.text.primary
                        })} />

                    </IconButton>

                </FormControl>

            </Tooltip>




            <Modal open={link_state.open_modal} onClose={handle_modal_close}>

                <MODAL_CONTENT___STYLED>


                    {(() => {


                        if (link_state.link_already_exist) {


                            return (

                                <Typography variant='body2' sx={{ textAlign: 'center' }}>Link already exists on your selected text. Just click on the text in the editor, you will get options to edit or remove the link.</Typography>
                            )

                        }

                        else {


                            if (link_state.text_is_selected) {


                                return (

                                    <Box component='form' onSubmit={handle_submit}
                                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                                        <TextField
                                            label="URL Link"
                                            variant="outlined"
                                            value={link_state.link}
                                            onChange={handle_input_change}
                                            size='small'
                                        />

                                        <Button type="submit" variant="contained" size='small' >
                                            Submit
                                        </Button>

                                    </Box>
                                )




                            }

                            else {


                                return (

                                    <Typography variant='body2' sx={{ padding: '1rem', textAlign: 'center' }}>Please select some text before trying to insert a link.</Typography>
                                )


                            }

                        }
                    })()}





                </MODAL_CONTENT___STYLED>

            </Modal>

        </>
    )
}






/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/

const IMAGE___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const initial_state = {
        open_image_insert_modal: false,

        trigger_quill_to_insert_the_image: false,

        currently_inserting_the_image: false,
    }


    const [image_state, update_image_state] = useImmer(initial_state)



    const handle_click_on_the_image_button = () => {

        update_image_state(draft => {
            draft.open_image_insert_modal = true
        })
    }



    // code to track the time of fetching the image after uploading it
    useMount(() => {

        quillRef.current.on('text-change', function (delta, oldDelta, source) {
            if (delta.ops) {
                delta.ops.forEach(op => {
                    if (op.insert && typeof op.insert === 'object' && op.insert.image) {

                        update_image_state(draft => {
                            draft.currently_inserting_the_image = true
                        })
                        const imageElement = new Image();
                        imageElement.src = op.insert.image;


                        imageElement.onload = () => {
                            update_image_state(draft => {
                                draft.currently_inserting_the_image = false

                                draft.open_image_insert_modal = false
                            })
                        }
                    }
                });
            }


        })

    })



    // inserting image on the editor after successfully uploading and fetching  it
    useUpdateEffect(() => {

        if (quillRef.current) {

            if (wysiwyg_state.editor_cursor.position !== '') {

                const range = quillRef.current.getSelection(true);

                quillRef.current.clipboard.dangerouslyPasteHTML(
                    wysiwyg_state.editor_cursor.position,

                    // when we insert an image, initially the image's width would be 250px
                    `<img width="250" src="${wysiwyg_state.images.last_uploaded_image_link}">`
                )

                quillRef.current.setSelection(range.index + 1);
            }
        }


        update_wysiwyg_state(draft => {

            draft.images.last_uploaded_image_link = ''
        })

    }, [image_state.trigger_quill_to_insert_the_image])



    return (

        <>
            <Tooltip title="Image" placement="top">
                <FormControl margin='dense'>
                    <IconButton onClick={handle_click_on_the_image_button}>
                        <ImageRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />
                    </IconButton>
                </FormControl>
            </Tooltip>


            <INSERT_IMAGE___SECTION wysiwyg_state={wysiwyg_state} update_wysiwyg_state={update_wysiwyg_state} image_state={image_state} update_image_state={update_image_state} />

        </>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const EMBED_YOUTUBE_VIDEO___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    // state to handle all the possible changes of this component
    const initial_state = {

        open_modal: false,

        link: '',

        valid_link: true,

        trigger_video_embed_process: false,



        remembering_cursor_position: 0,
    }


    const [video_state, update_video_state] = useImmer(initial_state)



    // regex to check valid youtube video link
    const youtube_video_link_regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:.*)$/;



    /* when a user clicks on the toolbar's embed video icon button,  the following function gets triggered */
    const handle_click_on_the_button = () => {

        /* focus to the editor when the button is clicked, regardless of whether it already has focus or not */
        quillRef.current.focus()

        /* open the modal */
        update_video_state(draft => {
            draft.open_modal = true
        })
    }


    /* when a user types something in the input box of the modal, the following function gets triggered */
    const handle_input_change = (e) => {

        update_video_state(draft => {
            draft.link = e.target.value;
        })
    }


    /*  when a user submits the link, the following function gets triggered */
    const handle_submit = () => {


        function is_valid_video_link(link) {
            /* as we are just accepting youtube video, we are just using regex which checks youtube's link */

            return youtube_video_link_regex.test(link)
        }



        /* 
        - if the link is not a valid link, we will change the value of the 'valid_link' property of the 'video_state'. 
        - We will also return from this 'handle_submit' function 
        */
        if (!is_valid_video_link(video_state.link.trim())) {

            update_video_state(draft => {
                draft.valid_link = false;
            })

            return
        }




        // if the link is valid, the following code will run 
        // updating the state
        update_video_state(draft => {

            draft.valid_link = true;

            draft.trigger_video_embed_process = !draft.trigger_video_embed_process

            // closing the modal
            draft.open_modal = false;
        })

    }



    /*  when the user closes the modal or when the modal automatically gets closed, the following function gets triggered */
    const handle_modal_close = () => {


        // when the modal closes, we don't want to do anything other than closing the modal!
        update_video_state(draft => {
            draft.open_modal = false
        })
    }



    /*
        - updating the value of 'remembering_cursor_position' 'video_state' state
        
        - when 'open_modal' value of the 'video_state' state changes, the following effect occurs
    */
    useUpdateEffect(() => {

        // only when the modal is open, we want to update the value
        if (video_state.open_modal) {

            update_video_state(draft => {
                draft.remembering_cursor_position = wysiwyg_state.editor_cursor.position
            })
        }

    }, [video_state.open_modal])





    /*
        - embedding the video on the editor 
        
        - when the 'trigger_video_embed_process' value of the 'video_state' state, the following effect occurs 
    */
    useUpdateEffect(() => {

        if (quillRef.current) {

            const original_link = video_state.link
            const video_id = original_link.match(youtube_video_link_regex)[1];
            const embed_link = `https://www.youtube.com/embed/${video_id}`

            // embedding the video
            quillRef.current.clipboard.dangerouslyPasteHTML(
                wysiwyg_state.editor_cursor.position,


                `<iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="${embed_link}"></iframe>`
            )


            /* updating the cursor position */
            update_wysiwyg_state(draft => {
                draft.editor_cursor.position = video_state.remembering_cursor_position + 1
            })

            //  moving the cursor after the embedded video
            quillRef.current.setSelection(video_state.remembering_cursor_position + 1)





            /* after the video is embedded, cleaning the input field in the modal */


            update_video_state(draft => {

                draft.link = ''

            })


        }


    }, [video_state.trigger_video_embed_process])






    return (
        <>
            <Tooltip title="Embed Youtube Video" placement="top">

                <FormControl margin='dense'>

                    <IconButton onClick={handle_click_on_the_button} >

                        <YouTube sx={(theme) => ({
                            fontSize: '1.2rem'
                        })} />

                    </IconButton>

                </FormControl>

            </Tooltip>




            <Modal open={video_state.open_modal} onClose={handle_modal_close}>

                <MODAL_CONTENT___STYLED>

                    <Box component='form' onSubmit={handle_submit}
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                        <TextField
                            label="URL Link"
                            variant="outlined"
                            value={video_state.link}
                            onChange={handle_input_change}
                            size='small'
                        />

                        <Button type="submit" variant="contained" size='small' >
                            Submit
                        </Button>

                        {video_state.valid_link === false &&

                            <Typography variant='body2' color='error.main'>Provide a valid video link of youtube.</Typography>

                        }

                    </Box>

                </MODAL_CONTENT___STYLED>

            </Modal>

        </>
    )
}





/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const SUB_SCRIPT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleSubScript = () => {

        const isSubScript = quillRef.current.getFormat().script === 'sub'

        if (isSubScript) {
            quillRef.current.format('script', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.script = false
            })

        } else {
            quillRef.current.format('script', 'sub');

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.script = 'sub'
            })
        }

    }


    return (

        <Tooltip title="SubScript" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleSubScript}>

                    <SubscriptRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.script === 'sub' ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const SUPER_SCRIPT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {


    const handleSubScript = () => {

        const isSubScript = quillRef.current.getFormat().script === 'super'

        if (isSubScript) {
            quillRef.current.format('script', false);

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.script = false
            })

        } else {
            quillRef.current.format('script', 'super');

            update_wysiwyg_state(draft => {
                draft.formats_of_selected_text.script = 'super'
            })
        }

    }


    return (

        <Tooltip title="SuperScript" placement="top">

            <FormControl margin='dense'>

                <IconButton onClick={handleSubScript}>

                    <SuperscriptRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                        color: wysiwyg_state.formats_of_selected_text.script === 'super' ? theme.palette.error.dark : theme.palette.text.primary
                    })} />

                </IconButton>

            </FormControl>

        </Tooltip>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const UNDO___SECTION = ({ quillRef }) => {

    const handle_undo = () => {

        quillRef.current.history.undo()
    }


    return (

        <Tooltip title="Undo" placement="top">
            <FormControl margin='dense'>
                <IconButton onClick={handle_undo}>
                    <UndoRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                    })} />
                </IconButton>
            </FormControl>
        </Tooltip>

    )


}



/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const REDO___SECTION = ({ quillRef }) => {

    const handle_redo = () => {

        quillRef.current.history.redo()
    }


    return (

        <Tooltip title="Redo" placement="top">
            <FormControl margin='dense'>
                <IconButton onClick={handle_redo}>
                    <RedoRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                    })} />
                </IconButton>
            </FormControl>
        </Tooltip>

    )


}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/


const CLEAR_FORMAT___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state, wysiwyg_initial_state }) => {



    const [remove_format_state, update_remove_format_state] = useImmer({
        trigger_format_checking: false
    })



    const handle_clear_format = () => {

        const range = quillRef.current.getSelection();
        if (range) {
            quillRef.current.removeFormat(range.index, range.length);
        }


        update_remove_format_state(draft => {
            draft.trigger_format_checking = !draft.trigger_format_checking
        })
    }




    /* Updating the wysiwyg_state.formats_of_selected_text */
    useUpdateEffect(() => {

        // getting the format after using removeFormat
        const format = quillRef.current.getFormat(wysiwyg_state.editor_cursor.position, wysiwyg_state.editor_cursor.selection_length)

        // updating
        update_wysiwyg_state(draft => {

            draft.formats_of_selected_text = { ...wysiwyg_initial_state.formats_of_selected_text, ...format }
        })


    }, [remove_format_state.trigger_format_checking]);



    return (
        <Tooltip title="Clear Format" placement="top">
            <FormControl margin='dense'>
                <IconButton onClick={handle_clear_format}>
                    <FormatClearRounded sx={(theme) => ({
                        fontSize: '1.2rem',
                    })} />
                </IconButton>
            </FormControl>
        </Tooltip>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <WYSIWYG_TOOLBAR___COMPONENT/>
----------------------------------------------------------------------*/




const BASE64_IMAGE___SECTION = ({ quillRef, wysiwyg_state, update_wysiwyg_state }) => {

    const initial_state = {
        open_image_insert_modal: false,

        trigger_quill_to_insert_the_image: false,
    }


    const [image_state, update_image_state] = useImmer(initial_state)



    const handle_click_on_the_image_button = () => {

        update_image_state(draft => {
            draft.open_image_insert_modal = true
        })
    }


    //  handleCloseModal
    const handleCloseModal = () => {

        update_image_state(draft => {
            draft.open_image_insert_modal = false
        })
    }



    // 🍪 form state management (1/3 Steps) - form_configuration 🍪
    const form_configuration = {

        selected_image: {
            value: '',

            additionally_tracking: {
                preview_link: null
            },

            is_required: true,

            validation: {

                is_validating: true,

                'accepted_file_formats': ['png', 'jpg', 'jpeg'],

                'accepted_maximum_file_size': 512,  //kb

                error_message: function () {

                    return (

                        `Image must have one of these extensions: ${JSON.stringify(this.accepted_file_formats)}. 
                            
                        Image size must be lower than ${this.accepted_maximum_file_size}kb.`
                    )
                }

            }



        }
    }


    // 🍪 form state management (2/2 Steps) - useFormManagement 🍪
    const {
        formState,
        updateFormState,
        actions,
        validation_info,
        validation_before_form_submission_func

    } = useFormManagement(form_configuration)


    useLogger('image', formState)



    // 🍪 form state management (7/7 Steps) - handleSubmit 🍪
    const handleSubmit = (event) => {

        // 🍔🍔 stop refreshing the page on reload 🍔🍔
        event.preventDefault();


        /* 🍔🍔 if 'validation_before_form_submission_func' function returns true, that means there is at least one validation error in the form and we can not submit the form🍔🍔 */
        if (validation_before_form_submission_func() === true) return;


        /* 🍔🍔 submit the form's all the inputted data 🍔🍔 */
        console.log('😃 submitting data', {
            ...formState.form_data
        })


        // 🍔🍔 Trigger quill to insert the image 🍔🍔
        update_image_state(draft => {
            draft.open_image_insert_modal = false

            draft.trigger_quill_to_insert_the_image = !draft.trigger_quill_to_insert_the_image
        })


    }




    // inserting image on the editor after successfully uploading and fetching  it
    useUpdateEffect(() => {


        let base64String
        const reader = new FileReader();
        reader.readAsDataURL(formState.form_data.selected_image.value);

        reader.onload = () => {
            base64String = reader.result;
            console.log(base64String)

            quillRef.current.insertEmbed(1, 'image', base64String);

        }





    }, [image_state.trigger_quill_to_insert_the_image])



    return (

        <>
            <Tooltip title="BINARY Image" placement="top">
                <FormControl margin='dense'>
                    <IconButton onClick={handle_click_on_the_image_button}>
                        <ImageRounded sx={(theme) => ({
                            fontSize: '1.2rem',
                        })} />
                    </IconButton>
                </FormControl>
            </Tooltip>




            <Modal
                open={image_state.open_image_insert_modal}
                onClose={handleCloseModal}
            >


                <MODAL_CONTENT___STYLED>

                    <WRAPPER_OF_FORM___STYLED>

                        <WRAPPER_OF_FORM_CONTENT___STYLED onSubmit={handleSubmit}>


                            <MUI_IMAGE___COMPONENT

                                label='Image'

                                input_name='selected_image'

                                state={formState}

                                update_state={updateFormState}

                                actions={actions}

                                validation_info={validation_info}

                            />


                            <Button type="submit" variant='contained'>Submit</Button>


                        </WRAPPER_OF_FORM_CONTENT___STYLED>

                    </WRAPPER_OF_FORM___STYLED>

                </MODAL_CONTENT___STYLED>

            </Modal>

        </>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <IMAGE___SECTION/>
----------------------------------------------------------------------*/


const INSERT_IMAGE___SECTION = ({ update_wysiwyg_state, wysiwyg_state, image_state, update_image_state }) => {



    //  handleCloseModal
    const handleCloseModal = () => {

        update_image_state(draft => {
            draft.open_image_insert_modal = false
        })
    }




    return (
        <>

            <Modal
                open={image_state.open_image_insert_modal}
                onClose={handleCloseModal}
            >


                <MODAL_CONTENT___STYLED>

                    <UPLOAD_IMAGE___SECTION update_wysiwyg_state={update_wysiwyg_state} wysiwyg_state={wysiwyg_state} image_state={image_state} update_image_state={update_image_state} />

                </MODAL_CONTENT___STYLED>


            </Modal>


        </>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <INSERT_IMAGE___SECTION/>
----------------------------------------------------------------------*/


const UPLOAD_IMAGE___SECTION = ({ update_wysiwyg_state, wysiwyg_state, image_state, update_image_state }) => {


    // 🍪 form state management (1/3 Steps) - form_configuration 🍪
    const form_configuration = {

        selected_image: {
            value: '',

            additionally_tracking: {
                preview_link: null
            },

            is_required: true,

            validation: {

                is_validating: true,

                'accepted_file_formats': ['png', 'jpg', 'jpeg'],

                'accepted_maximum_file_size': 512,  //kb

                error_message: function () {

                    return (

                        `Image must have one of these extensions: ${JSON.stringify(this.accepted_file_formats)}. 
                            
                        Image size must be lower than ${this.accepted_maximum_file_size}kb.`
                    )
                }

            }



        }
    }


    // 🍪 form state management (2/2 Steps) - useFormManagement 🍪
    const {
        formState,
        updateFormState,
        actions,
        validation_info,
        validation_before_form_submission_func

    } = useFormManagement(form_configuration)


    useLogger('image', formState)



    // 🍪 hook related to API request 🍪
    const { mutate, status, data, error } = useUploadImage();

    // logging response
    // useLogger('status', status, 'data', data, 'error', error)



    // 🍪 form state management (7/7 Steps) - handleSubmit 🍪
    const handleSubmit = (event) => {

        // 🍔🍔 stop refreshing the page on reload 🍔🍔
        event.preventDefault();


        /* 🍔🍔 if 'validation_before_form_submission_func' function returns true, that means there is at least one validation error in the form and we can not submit the form🍔🍔 */
        if (validation_before_form_submission_func() === true) return;


        /* 🍔🍔 submit the form's all the inputted data 🍔🍔 */
        console.log('😃 submitting data', {
            ...formState.form_data
        })


        // 🍔🍔 API request - upload the image 🍔🍔

        const formData = new FormData();

        formData.append('image', formState.form_data.selected_image.value);

        formData.append('user_id', '07')

        mutate(formData);


        /* 🍔🍔 reset the form  🍔🍔*/
        actions.reset_form()
    }






    // if image successfully uploads, we need to update multiple values of 'wysiwyg_state' state
    useUpdateEffect(() => {

        if (status === 'success' && data) {


            update_image_state(draft => {

                draft.trigger_quill_to_insert_the_image = !draft.trigger_quill_to_insert_the_image
            })

            update_wysiwyg_state(draft => {


                // then changing other states
                draft.images.all_uploaded_images_info.push(data.data.created_document)

                draft.images.all_uploaded_images_link.push(data.data.created_document.image_link)

                draft.images.last_uploaded_image_link = data.data.created_document.image_link

            })


        }

    }, [data])



    return (

        <WRAPPER_OF_FORM___STYLED>

            <WRAPPER_OF_FORM_CONTENT___STYLED onSubmit={handleSubmit}>


                {(() => {

                    if (status === 'idle') return (
                        <>
                            <MUI_IMAGE___COMPONENT

                                label='Image'

                                input_name='selected_image'

                                state={formState}

                                update_state={updateFormState}

                                actions={actions}

                                validation_info={validation_info}

                            />


                            <Button type="submit" variant='contained' disabled={status === 'loading'}>Submit</Button>

                        </>
                    )

                    else {

                        return (


                            <>


                                <LOADING_SPINNER___COMPONENT fullPage={false} margin='2rem' />


                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    {(() => {
                                        if (status === 'loading') return 'Uploading the image..'

                                        else if (image_state.currently_inserting_the_image) return 'Fetching and inserting the image'
                                    })()}
                                </Typography>


                            </>



                        )


                    }


                })()}




            </WRAPPER_OF_FORM_CONTENT___STYLED>

        </WRAPPER_OF_FORM___STYLED>
    )
}



















/*-------------------------------------------------------------------
✅ Styled Components for Multiple 'Section' Components
----------------------------------------------------------------------*/


const SELECT___STYLED = styled((props) =>


    <Select {...props} variant="standard" disableUnderline />


)(({ theme }) => `

   font-size: ${theme.typography.overline.fontSize};
`)





const MENU_ITEM___STYLED = styled((props) =>

    <MenuItem {...props} />


)(({ theme }) => `

   font-size: ${theme.typography.overline.fontSize}

`)



/* 🍔 */
const MODAL_CONTENT___STYLED = styled((props) =>

    <Box  {...props} />
)
    (({ theme }) => `

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    background: ${theme.palette.background.variation};
    box-shadow: 2rem;
    padding: 2rem;
`)











/*-------------------------------------------------------------------
✅ Styled Components for <UPLOAD_IMAGE___SECTION/>
----------------------------------------------------------------------*/

/* 🍔 */
const WRAPPER_OF_FORM___STYLED = styled((props) =>

    <Box  {...props} />
)
    (({ theme }) => `

display:flex;
flex-direction:column;
align-items: center;
`)



/* 🍔 */
const WRAPPER_OF_FORM_CONTENT___STYLED = styled((props) =>

    <Box  {...props} component='form' />
)
    (({ theme }) => `

    ${media_queries.name_xs_sm_md_lg('width', '18rem', '20rem', '22rem', '24rem')};

    ${/*when the width is increasing 2, we need to increase the padding the padding 1 because padding has right and left. */ ''}
    ${media_queries.name_xs_sm_md_lg('padding-right', '1rem', '2rem', '3rem', '4rem')};
    ${media_queries.name_xs_sm_md_lg('padding-left', '1rem', '2rem', '3rem', '4rem')};
    padding-top:1rem;
    padding-bottom:1rem;

    background-color: ${theme.palette.background.variation};


    ${/* Button's size is getting changed while toggling the email form if we use display:'grid' instead of display:'flex' & flex-direction:'column' */ ''}
    display: flex;
    flex-direction: column;
    justify-content: center; 
    gap: 1.2rem; 
`)







