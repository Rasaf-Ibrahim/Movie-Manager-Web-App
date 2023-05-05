// hook
import { useState } from "react";
import { useUpdateEffect } from 'react-use';

// utils
import { form_empty_field_func } from "@/utils/form/form-empty-field-func";

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
        state,
        actions,
        validation_info,
        multiline,
        variant_value
    } = props




    // 🍪 state to trigger validation  🍪 
    const [state_trigger_validation_check, set_state_trigger_validation_check] = useState(false)



    // 🍪 handle input change 🍪
    const handle_change_func = (event) => {

        /* 🍔 Updating state 🍔 */
        actions.update_input_value({
            input_name: [input_name],
            value: event.target.value
        })


        /* 🍔 Triggering validation check on input change 🍔 */
        set_state_trigger_validation_check(!state_trigger_validation_check)

    }



    // 🍪 validation function 🍪
    const validation_func = async () => {


        /* 🍔 required field Validation 🍔 */
        //  only proceed to required field validation if this field is a required field.
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

            // 🍗 match_this_field error
            let match_value_error = false

            if (validation_info[input_name].validation.match_this_field) {

                let value_has_matched = state.form_data[input_name].value === state.form_data[validation_info[input_name].validation.match_this_field].value

                if (!value_has_matched) {

                    match_value_error = true
                }

                else {

                    match_value_error = false
                }
            }

            // 🍗 match_pattern error
            let match_pattern_error = false

            if (validation_info[input_name].validation.match_pattern) {

                let pattern_has_matched = validation_info[input_name].validation.match_pattern.test(state.form_data[input_name].value)

                if (!pattern_has_matched) {

                    match_pattern_error = true
                }

                else {

                    match_pattern_error = false

                }


            }


            // 🍗 executing 'actions.validation_error' if there is any error
            if (match_value_error || match_pattern_error) {

                actions.validation_error({
                    input_name: [input_name]
                })

            }


            // 🍗 executing ' actions.no_validation_error' if there is no error or the input field is empty (if the input field is empty, there is nothing to validate)
            if ((!match_value_error && !match_pattern_error) || form_empty_field_func(state.form_data[input_name].value)) {

                actions.no_validation_error({
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
                                value={state.form_data[input_name].value}
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
                                value={state.form_data[input_name].value}
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
                                value={state.form_data[input_name].value}
                                onChange={handle_change_func}
                            />
                        )
                    }
                })()
            }




            {/* error message */}
            <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={label}>


                {state.required_field_error[input_name] === true &&
                    <Typography variant='body1'>
                        You must not skip this field.
                    </Typography>
                }

                {state.validation_error[input_name] === true &&
                    <Typography variant='body1'>
                        {validation_info[input_name].validation.error_message}
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