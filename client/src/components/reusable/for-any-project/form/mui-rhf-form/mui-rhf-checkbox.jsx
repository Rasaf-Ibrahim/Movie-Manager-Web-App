/* ~~~ a note type of comment has been removed from here after making this repository public ~~~ */

/* ⚠️⚠️⚠️ Has problem with this component, not using this component currently */



// PropTypes
import { PropTypes } from "prop-types";

// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material'



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_CHECKBOX___COMPONENT(props) {

    const { control, propertyName, label, is_checkbox_checked, is_required_field } = props



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <Controller
            name={propertyName}
            control={control}

            /* we want this checkbox to be a required field or not is depending on the 'is_required_field' prop */
            rules={{ required: is_required_field ? 'You must select an option' : null }}

            render={({ field: { onChange, value }, fieldState: { error } }) => (

                <FormControl>

                    <FormControlLabel
                        label={label}
                        value={value}
                        onChange={onChange}
                        error={!!error}

                        control={

                            <Checkbox
                                checked={value}

                                /*  'defaultChecked' prop makes the checkbox initially checked, we want the checkbox to be initially checked or not is depending on another prop: 'is_checkbox_checked'  */
                                {...(is_checkbox_checked ? { defaultChecked: true } : { defaultChecked: false })}

                            />
                        }


                    />



                    <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={propertyName}>


                        {error && value === false ? <Typography variant='body1'>You must not skip this checkbox field</Typography> : null}

                    </FormHelperText>


                </FormControl>
            )}
        />
    )

}



/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_CHECKBOX___COMPONENT/>
----------------------------------------------------------------------*/

MUI_RHF_CHECKBOX___COMPONENT.propTypes = {

    // required
    control: PropTypes.object.isRequired,

    label: PropTypes.string.isRequired,

    propertyName: PropTypes.string.isRequired,

    // optional
    is_required_field: PropTypes.bool,
    is_checkbox_checked: PropTypes.bool

}


/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_RHF_CHECKBOX___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_CHECKBOX___COMPONENT.defaultProps = {

    is_required_field: false,
    is_checkbox_checked: false,

}
