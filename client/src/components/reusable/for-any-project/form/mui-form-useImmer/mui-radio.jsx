// hook
import { useState } from 'react';
import { useUpdateEffect } from 'react-use';

// utils
import { form_empty_field_func } from "@/utils/form/form-empty-field-func";

// components
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText, Typography } from '@mui/material';



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RADIO___COMPONENT(props) {

    // props
    const {
        label,
        input_name,
        radio_array,
        state,
        actions,
        validation_info,

        // optional
        all_radio_buttons_in_a_row,
        label_placement,
        radio_size_in_rem,
        color
    } = props





    /* 🍪 state to trigger validation  🍪 */
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

    }



    // 🍪 executing validation function 🍪
    useUpdateEffect(() => {

        validation_func()

    }, [state_trigger_validation_check])





    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (
        <FormControl>

            <FormLabel id={input_name}>{label}</FormLabel>

            <RadioGroup
                name={input_name}
                value={state.form_data[input_name].value}
                onChange={handle_change_func}

                sx={{ display: 'flex', flexDirection: `${all_radio_buttons_in_a_row ? 'row' : 'column'}`, flexWrap: 'wrap' }}
            >


                {
                    radio_array.map((radio) => {

                        return (
                            <FormControlLabel
                                key={radio.value}
                                value={radio.value}
                                label={radio.label}
                                labelPlacement={label_placement}
                                control={<Radio color={color} />}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: `${radio_size_in_rem}`,
                                    },
                                }} />
                        )
                    })

                }


            </RadioGroup>


            <FormHelperText sx={{ color: 'error.main', m: 0 }} >

                {state.required_field_error[input_name] === true &&

                    <Typography variant='body1'>
                        You must not skip this field.
                    </Typography>
                }

            </FormHelperText>

        </FormControl>
    )
}



/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_RADIO___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RADIO___COMPONENT.defaultProps = {

    all_radio_buttons_in_a_row: false,

    label_placement: 'end',

    radio_size_in_rem: '1.5rem',

    color: 'primary'
}
