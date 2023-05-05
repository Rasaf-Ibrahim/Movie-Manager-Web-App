// hook
import { useState, useRef } from "react";
import { useUpdateEffect } from 'react-use';

// utils
import { form_empty_field_func } from "@/utils/form/form-empty-field-func";

// icon
import PhotoIcon from '@mui/icons-material/Photo';

// components
import { Box, Button, InputLabel, Typography } from '@mui/material'




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_IMAGE___COMPONENT(props) {


    // 🍪 props 🍪 
    const {
        label,
        input_name,
        state,
        actions,
        validation_info,
    } = props





    // 🍪 state to trigger validation  🍪 
    const [state_trigger_validation, set_state_trigger_validation_check] = useState(false)




    // 🍪input_field_ref 🍪
    const input_field_ref = useRef();


    // 🍪 When you click on the button, logically you also click on the input field 🍪
    const handle_logically_click_the_input_on_button_click = () => {

        return input_field_ref.current.click()
    }


    // 🍪 handle input change on selecting an image 🍪
    const handle_input_change_on_selecting_image = (event) => {

        /* 🍔🍔 Updating Input Value 🍔🍔 */

        actions.update_image_value({
            input_name: [input_name],

            new_value: event.target.files[0],

            new_preview_link: URL.createObjectURL(event.target.files[0])
        })


        /* 🍔 Triggering validation check on input change 🍔 */
        set_state_trigger_validation_check(!state_trigger_validation)
    }


    // 🍪 handle drag over 🍪
    const handle_drag_over = (event) => {
        event.preventDefault();
    }

    // 🍪 handle input change on drag & dropping an image 🍪
    const handle_input_change_on_dropping_image = (event) => {

        event.preventDefault();


        /* 🍔🍔 Updating Input Value 🍔🍔 */
        actions.update_image_value({
            input_name: [input_name],

            new_value: event.dataTransfer.files[0],

            new_preview_link: URL.createObjectURL(event.dataTransfer.files[0])
        })



        /* 🍔 Triggering validation check on input change 🍔 */
        set_state_trigger_validation_check(!state_trigger_validation)
    }


    // 🍪 handle delete selected image  🍪
    const handle_delete_selected_image = () => {

        /* 🍔🍔 deleting the image 🍔🍔 */
        actions.remove_image({
            input_name: [input_name]
        })




        /* 🍔 Triggering validation check on input change 🍔 */
        set_state_trigger_validation_check(!state_trigger_validation)
    }



    // 🍪 validation function 🍪
    const validation_func = async () => {


        /* 🍔 Required Field Validation 🍔 */
        //  only proceed to required field validation if this field is a required field.

        console.log(validation_info)
        if (validation_info[input_name].is_required) {



            if (form_empty_field_func(state.form_data[input_name].value)) {

                actions.required_field_error({
                    input_name: [input_name],
                })
            }

            else {
                actions.no_required_field_error({
                    input_name: [input_name],
                })

            }

        }



        /* 🍔 input validation  🍔 */
        //  only proceed to validation if we want to validate this field
        if (validation_info[input_name].validation.is_validating) {

            // 🍗 file format error 
            let file_format_error = false

            if ((Object.hasOwn(validation_info[input_name].validation, 'accepted_file_formats'))) {

                const accepted_file_formats = validation_info[input_name].validation.accepted_file_formats

                const uploaded_file_formats = state.form_data[input_name].value.name.split('.')[1]

                if (!accepted_file_formats.includes(uploaded_file_formats)) {

                    file_format_error = true

                }

            }


            // 🍗 file size error 
            let file_size_error = false

            if ((Object.hasOwn(validation_info[input_name].validation, 'accepted_maximum_file_size'))) {

                const accepted_maximum_file_size = validation_info[input_name].validation.accepted_maximum_file_size

                const fileSize = Math.round(state.form_data[input_name].value.size / 1024)

                if (fileSize > accepted_maximum_file_size) {

                    file_size_error = true

                }

            }



            // 🍗  Dispatching based on error  
            if (file_format_error || file_size_error) {

                // remove image
                actions.remove_image({
                    input_name: [input_name]
                })


                actions.validation_error({
                    input_name: [input_name]
                })
            }

            // on input change, if there is no invalid image
            else {

                actions.no_validation_error({
                    input_name: [input_name]
                })

            }
        }



        /* ~~~ a note type of comment has been removed from here after making this repository public ~~~ */

        /* ⚠️⚠️⚠️ couldn't make logic to check the selected image's dimension!*/

    }


    // 🍪 executing validation function 🍪
    useUpdateEffect(() => {

        validation_func()

    }, [state_trigger_validation])




    /*-------------------------------------------------------------------
        ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <Box sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '1rem'
        })}>

            <InputLabel>{label}</InputLabel>


            <DRAG_OR_SELECT_IMAGE___SECTION
                handle_drag_over={handle_drag_over}
                handle_input_change_on_dropping_image={handle_input_change_on_dropping_image}
                handle_input_change_on_selecting_image={handle_input_change_on_selecting_image}
                input_field_ref={input_field_ref}
                handle_logically_click_the_input_on_button_click={handle_logically_click_the_input_on_button_click}
            />


            <ERROR_MESSAGE___SECTION
                state={state}
                input_name={input_name}
                validation_info={validation_info}
            />


            <IMAGE_PREVIEW___SECTION
                state={state}
                input_name={input_name}
                handle_delete_selected_image={handle_delete_selected_image}
            />

        </Box>

    )

}






/*-------------------------------------------------------------------
 ✅ Sections of <MUI_IMAGE___COMPONENT/>
----------------------------------------------------------------------*/



/* 🍔 */
const DRAG_OR_SELECT_IMAGE___SECTION = ({
    handle_drag_over,
    handle_input_change_on_dropping_image,
    handle_input_change_on_selecting_image,
    input_field_ref,
    handle_logically_click_the_input_on_button_click,

}) => {

    return (

        <Box
            onDragOver={handle_drag_over}
            onDrop={handle_input_change_on_dropping_image}
            sx={(theme) => ({
                padding: '1rem',
                border: `0.5px dotted ${theme.palette.text.secondary}`,
                borderRadius: '0.5rem',

                textAlign: 'center',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
            })}>

            <PhotoIcon
                sx={(theme) => ({
                    fontSize: '1.8rem',
                    color: theme.palette.primary.light
                })}
            />

            <Typography
                variant='body2'
                color='primary.light'
            >
                Drag & Drop or,
            </Typography>

            <input
                type="file"
                onChange={handle_input_change_on_selecting_image}
                hidden
                ref={input_field_ref}
            />

            <Button
                onClick={handle_logically_click_the_input_on_button_click}
                variant='outlined'
                size='small'
                sx={(theme) => ({
                    color: theme.palette.primary.light,
                    ...theme.typography.body2
                })}
            >
                Select
            </Button>

        </Box>


    )

}




/* 🍔 */
const ERROR_MESSAGE___SECTION = ({
    state,
    input_name,
    validation_info

}) => {

    return (

        <Box sx={{ color: 'error.main', textAlign: 'center' }}>


            {state.required_field_error[input_name] === true &&
                <Typography variant='body1'>
                    You must not skip this field.
                </Typography>
            }


            {/* We will not show the input validation error when there is already required field error. */}
            {state.required_field_error[input_name] === false && state.validation_error[input_name] === true &&
                <Typography variant='body1'>
                    {validation_info[input_name].validation.error_message()}
                </Typography>
            }

        </Box>

    )

}



/* 🍔 */
const IMAGE_PREVIEW___SECTION = ({
    state,
    input_name,
    handle_delete_selected_image

}) => {

    return (

        <>
            {!state.validation_error[input_name] && state.form_data[input_name].additionally_tracking.preview_link &&

                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <img style={{ width: '100px', height: '100px' }} src={state.form_data[input_name].additionally_tracking.preview_link} alt="" />

                    <Button onClick={() => handle_delete_selected_image()} size="small">
                        Remove
                    </Button>

                </Box>
            }

        </>

    )

}