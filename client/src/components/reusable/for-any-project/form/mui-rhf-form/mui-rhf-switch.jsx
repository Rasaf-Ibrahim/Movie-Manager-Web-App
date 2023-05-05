// PropTypes
import { PropTypes } from "prop-types";


// rhf component
import { Controller } from 'react-hook-form';


// mui component
import { FormControlLabel, Switch } from '@mui/material'


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_SWITCH___COMPONENT(props) {

    const { control, propertyName, label } = props


/*-------------------------------------------------------------------
 ✅ JSX
----------------------------------------------------------------------*/
    return (

        <Controller
            name={propertyName}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
                <FormControlLabel
                    value={value}
                    onChange={onChange}
                    control={<Switch />}
                    label={label}
                />

            )}
        />

    )


}




/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_SWITCH___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_SWITCH___COMPONENT.propTypes = {

    // required
    control: PropTypes.object.isRequired,

    label: PropTypes.string.isRequired,

    propertyName: PropTypes.string.isRequired,

}
