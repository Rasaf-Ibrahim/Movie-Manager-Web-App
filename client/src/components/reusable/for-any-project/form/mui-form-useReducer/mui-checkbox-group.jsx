// hook
import { useEffect, useState } from 'react';
import { useUpdateEffect } from 'react-use';


// PropTypes
import { PropTypes } from "prop-types";


// utils
import functions_for_no_library_form from '../../../../../utils/form/functions-for-form-made-with-use-reducer';

// components
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText, Typography } from '@mui/material'





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_CHECKBOX_GROUP___COMPONENT(props) {


    // props
    const {
        label,
        input_name,
        checkboxes_info_array,
        reducer_state,
        dispatch,
        validation_info_obj,

        // optional
        checkbox_size_in_rem,
        label_placement,
        color
    } = props


    /* 🍪 form_empty_field_func 🍪 */
    const { form_empty_field_func } = functions_for_no_library_form



    /* 🍪 state to trigger validation  🍪 */
    const [state_trigger_validation_check, set_state_trigger_validation_check] = useState(false)




    // 🍪 handle input change 🍪
    function handleChange(event) {

        /* 🍔 Updating state 🍔 */


        // value of the clicked checkbox 
        const value_of_the_clicked_checkbox = event.target.value


        // index of the value of the clicked checkbox on the 'reducer_state.form_data[input_name]' array
        const index = reducer_state.form_data[input_name].indexOf(value_of_the_clicked_checkbox)

        //  if before the click, the clicked checkbox's value wasn't on the 'reducer_state.form_data[input_name]' array , add the value
        if (index === -1) {



            dispatch({
                type: 'reducer_action___update_input_value',
                input_name: input_name,
                value: [...reducer_state.form_data[input_name], value_of_the_clicked_checkbox]
            })
        }

        //  if before the click, the clicked checkbox's value was already on the 'reducer_state.form_data[input_name]' array, remove the value
        else {

            const filtered_checked_checkbox_array = reducer_state.form_data[input_name].filter((value) => value !== value_of_the_clicked_checkbox)


            dispatch({
                type: 'reducer_action___update_input_value',
                input_name: input_name,
                value: [...filtered_checked_checkbox_array]
            })
        }





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

    }



    // 🍪 executing validation function 🍪
    useUpdateEffect(() => {

        validation_func()

    }, [state_trigger_validation_check])





    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <Box>

            <FormControl>

                <FormLabel>{label}</FormLabel>

                <FormGroup  >


                    {

                        checkboxes_info_array.map((checkbox) => {

                            return (

                                <FormControlLabel
                                    key={checkbox.value}
                                    label={checkbox.label}
                                    labelPlacement={label_placement}
                                    value={checkbox.value}
                                    control={

                                        <Checkbox
                                            checked={reducer_state.form_data[input_name]?.includes(checkbox.value)}
                                            onChange={handleChange}

                                            color={color}


                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: `${checkbox_size_in_rem}`,
                                                }
                                            }}
                                        />
                                    }
                                />

                            )

                        })

                    }



                    <FormHelperText sx={{ color: 'error.main', m: 0 }} >

                        {reducer_state.required_field_error[input_name] === true &&

                            <Typography variant='body1'>
                                You must not skip this field.
                            </Typography>
                        }

                    </FormHelperText>



                </FormGroup>



            </FormControl>


        </Box>
    )
}




/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_CHECKBOX_GROUP___COMPONENT/>
----------------------------------------------------------------------*/

MUI_CHECKBOX_GROUP___COMPONENT.defaultProps = {

    label_placement: 'end',

    checkbox_size_in_rem: '1.5rem',

    color: 'primary'

}



