// PropTypes
import { PropTypes } from "prop-types";

// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText, Typography } from '@mui/material'

// toast
import { toast } from 'react-toastify';



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_INPUT___COMPONENT(props) {


    // props
    const { control, label, propertyName, validation_obj,
        inputFieldInitialValue, multiline, errorToast, variant_value } = props



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

        <Controller
            name={propertyName}
            control={control}
            defaultValue={inputFieldInitialValue}
            rules={{ ...validation_obj }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (

                <FormControl variant={selectedVariant()}>

                    <InputLabel htmlFor={propertyName}>{label}</InputLabel>



                    {
                        (() => {

                            if (variant_value === 'standard') {
                                return (
                                    <Input
                                        id={propertyName}
                                        multiline={multiline}
                                        minRows={4}
                                        fullWidth
                                        label={label}
                                        autoComplete='&#6#+'
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                    />
                                )
                            }

                            else if (variant_value === 'filled') {
                                return (
                                    <FilledInput
                                        id={propertyName}
                                        multiline={multiline}
                                        minRows={4}
                                        fullWidth
                                        label={label}
                                        autoComplete='&#6#+'
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                    />
                                )
                            }

                            else if (variant_value === 'outlined') {
                                return (
                                    <OutlinedInput
                                        id={propertyName}
                                        multiline={multiline}
                                        minRows={4}
                                        fullWidth
                                        label={label}
                                        autoComplete='&#6#+'
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                    />
                                )
                            }
                        })()
                    }




                    {/* error toast or error message*/}

                    {errorToast ?

                        <div style={{ display: 'none' }}>
                            {error && toast.error(error.message)}
                        </div>

                        :

                        <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={propertyName}>

                            {error ? <Typography variant='body1'>{error.message}</Typography> : null}

                        </FormHelperText>
                    }


                </FormControl>
            )}
        />
    )

}




/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_INPUT___COMPONENT/>
----------------------------------------------------------------------*/

MUI_RHF_INPUT___COMPONENT.propTypes = {

    // required
    control: PropTypes.object.isRequired,

    label: PropTypes.string.isRequired,

    propertyName: PropTypes.string.isRequired,

    validation_obj: PropTypes.object.isRequired,


    // optional
    inputFieldInitialValue: PropTypes.string,

    multiline: PropTypes.bool,

    errorToast: PropTypes.bool,

    variant_value: PropTypes.oneOf(['standard', 'filled', 'outlined'])
}


/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_RHF_INPUT___COMPONENT/>
----------------------------------------------------------------------*/

MUI_RHF_INPUT___COMPONENT.defaultProps = {

    inputFieldInitialValue: '',

    multiline: false,

    errorToast: false,

    variant_value: 'filled'

}