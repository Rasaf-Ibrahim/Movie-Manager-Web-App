
// PropTypes
import { PropTypes } from "prop-types";


// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, Typography } from '@mui/material'





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_RADIO___COMPONENT(props) {


    const { control, propertyName, label, radio_array, is_required_field, is_default_value } = props


    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <Controller
            name={propertyName}
            control={control}


            /* we want a default selected radio button or not  is depending on the 'is_required_field' & 'is_default_value' prop */
            defaultValue={is_required_field && is_default_value ? `${radio_array[0].value}` : null}

            /* we want this radio group to be a required field or not is depending on the 'is_required_field' prop */
            rules={{ required: is_required_field ? 'You must select an option' : false }}

            render={({ field: { onChange, value }, fieldState: { error } }) => (

                <FormControl>

                    {/* In other component, we are using <InputLabel/> but for radio buttons, we need to use <FormLabel/>*/}

                    <FormLabel id={propertyName} sx={{ textAlign: 'left' }}>{label}</FormLabel>

                    <RadioGroup
                        value={value}
                        onChange={onChange}
                        sx={{ display: 'flex', flexDirection: 'row' }}>
                        {

                            radio_array.map((radio) => {
                                return (
                                    <FormControlLabel key={radio.value} value={radio.value} label={radio.label} control={<Radio />} />
                                )
                            })

                        }

                    </RadioGroup>



                    <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={propertyName}>

                        {error ? <Typography variant='body1'>{error.message}</Typography> : null}

                    </FormHelperText>



                </FormControl>
            )}
        />
    )

}




/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_RADIO___COMPONENT/>
----------------------------------------------------------------------*/

MUI_RHF_RADIO___COMPONENT.propTypes = {

    // required
    control: PropTypes.object.isRequired,

    label: PropTypes.string.isRequired,

    propertyName: PropTypes.string.isRequired,

    radio_array: PropTypes.array.isRequired,


    // optional
    is_required_field: PropTypes.bool,
    is_default_value: PropTypes.bool,

}




/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_RHF_RADIO___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_RADIO___COMPONENT.defaultProps = {

    is_required_field: false,
    is_default_value: false

}

