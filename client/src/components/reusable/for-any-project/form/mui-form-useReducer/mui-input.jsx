// hook
import { useState } from "react";
import { useUpdateEffect } from 'react-use';

// PropTypes
import { PropTypes } from "prop-types";


// utils
import functions_for_no_library_form from '../../../../../utils/form/functions-for-form-made-with-use-reducer';


// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText, Typography } from '@mui/material'



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_INPUT___COMPONENT(props) {


    // 🍪 props 🍪 
    const {
        label,
        input_name,
        reducer_state,
        dispatch,
        validation_info_obj,
        multiline,
        variant_value
    } = props


    /* 🍪 form_empty_field_func 🍪 */
    const { form_empty_field_func } = functions_for_no_library_form


    // 🍪 state to trigger validation  🍪 
    const [state_trigger_validation_check, set_state_trigger_validation_check] = useState(false)



    // 🍪 handle input change 🍪
    const handle_change_func = (event) => {

        /* 🍔 Updating state 🍔 */
        dispatch({
            type: 'reducer_action___update_input_value',
            input_name: input_name,
            value: event.target.value
        })



        /* 🍔 Triggering validation check on input change 🍔 */
        set_state_trigger_validation_check(!state_trigger_validation_check)

    }



    // 🍪 validation function 🍪
    const validation_func = async () => {


        /* 🍔 required field Validation 🍔 */
        //  only proceed to required field validation if this field is a required field.
        if (validation_info_obj[input_name].is_required) {


            if (form_empty_field_func(reducer_state.form_data[input_name])) {

                dispatch({
                    type: 'reducer_action___required_field_error',
                    input_name: [input_name],
                })
            }

            else {

                dispatch({
                    type: 'reducer_action___no_required_field_error',
                    input_name: [input_name],
                })

            }



        }


        /* 🍔 input validation  🍔 */
        //  only proceed to validation if we want to validate this field
        if (validation_info_obj[input_name].is_validating) {

            // 🍗 match_value error
            let match_value_error = false

            if (validation_info_obj[input_name].what_to_validate_obj.match_value) {

                let value_has_matched = reducer_state.form_data[input_name] === validation_info_obj[input_name].what_to_validate_obj.match_value

                if (!value_has_matched) {

                    match_value_error = true
                }

                else {

                    match_value_error = false
                }
            }

            // 🍗 match_pattern error
            let match_pattern_error = false

            if (validation_info_obj[input_name].what_to_validate_obj.match_pattern) {

                let pattern_has_matched = validation_info_obj[input_name].what_to_validate_obj.match_pattern.test(reducer_state.form_data[input_name])

                if (!pattern_has_matched) {

                    match_pattern_error = true
                }

                else {

                    match_pattern_error = false

                }


            }


            // 🍗 dispatching 'reducer_action___validation_error' if there is any error
            if (match_value_error || match_pattern_error) {

                dispatch({
                    type: 'reducer_action___validation_error',
                    input_name: [input_name]
                })
            }


            // 🍗 dispatching 'reducer_action___no_validation_error' if there is no error or the input field is empty (if the input field is empty, there is nothing to validate)
            if ((!match_value_error && !match_pattern_error) || form_empty_field_func(reducer_state.form_data[input_name])) {

                dispatch({
                    type: 'reducer_action___no_validation_error',
                    input_name: [input_name]
                })

            }

        }

    }



    // 🍪 executing validation function 🍪
    useUpdateEffect(() => {

        validation_func()

    }, [state_trigger_validation_check])




    /* 🍪 selected variant (UI) 🍪 */
    const selectedVariant = () => {

        if (variant_value === 'standard') {
            return (
                "standard"
            )
        }

        else if (variant_value === 'filled') {
            return (
                "filled"
            )
        }

        else if (variant_value === 'outlined') {
            return (
                "outlined"
            )
        }

    }



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <FormControl variant={selectedVariant()}>

            <InputLabel htmlFor={input_name}>{label}</InputLabel>

            {
                (() => {

                    if (variant_value === 'standard') {
                        return (
                            <Input
                                id={input_name}
                                multiline={multiline}
                                minRows={4}
                                fullWidth
                                label={label}
                                autoComplete='&#6#+'
                                value={reducer_state.form_data[input_name]}
                                onChange={handle_change_func}
                            />
                        )
                    }


                    else if (variant_value === 'filled') {
                        return (
                            <FilledInput
                                id={input_name}
                                multiline={multiline}
                                minRows={4}
                                fullWidth
                                label={label}
                                autoComplete='&#6#+'
                                value={reducer_state.form_data[input_name]}
                                onChange={handle_change_func}
                            />
                        )
                    }


                    else if (variant_value === 'outlined') {
                        return (
                            <OutlinedInput
                                id={input_name}
                                multiline={multiline}
                                minRows={4}
                                fullWidth
                                label={label}
                                autoComplete='&#6#+'
                                value={reducer_state.form_data[input_name]}
                                onChange={handle_change_func}
                            />
                        )
                    }
                })()
            }




            {/* error message */}
            <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={label}>


                {reducer_state.required_field_error[input_name] === true &&
                    <Typography variant='body1'>
                        You must not skip this field.
                    </Typography>
                }

                {reducer_state.validation_error[input_name] === true &&
                    <Typography variant='body1'>
                        {validation_info_obj[input_name].error_message}
                    </Typography>
                }


            </FormHelperText>



        </FormControl>

    )


}



/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_INPUT___COMPONENT/>
----------------------------------------------------------------------*/
MUI_INPUT___COMPONENT.defaultProps = {

    multiline: false,
    variant_value: 'filled'
}