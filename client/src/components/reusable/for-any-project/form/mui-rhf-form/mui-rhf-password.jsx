

// PropTypes
import { PropTypes } from "prop-types";


// useState
import { useState } from 'react';

// rhf component
import { Controller } from 'react-hook-form';


// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText, IconButton, Typography } from '@mui/material'

// icon
import Visibility from "@mui/icons-material//Visibility";
import VisibilityOff from "@mui/icons-material//VisibilityOff";

// toast
import { toast } from 'react-toastify';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_PASSWORD___COMPONENT(props) {


  const { control, label, propertyName, validation_obj, errorToast, variant_value } = props


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


  // state for showing and hiding Password 
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);




/*-------------------------------------------------------------------
 ✅ JSX
----------------------------------------------------------------------*/
  return (

    <Controller
      name={propertyName}
      control={control}
      defaultValue=""
      rules={{ ...validation_obj }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant={selectedVariant()}>

          <InputLabel htmlFor={propertyName}>{label}</InputLabel>


          {
            (() => {

              if (variant_value === 'standard') {
                return (
                  <Input
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
                  />
                )
              }


              else if (variant_value === 'filled') {
                return (
                  <FilledInput
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
                  />
                )
              }


              else if (variant_value === 'outlined') {
                return (
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
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
 ✅ propTypes of <MUI_RHF_PASSWORD___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_PASSWORD___COMPONENT.propTypes = {

  // required
  control: PropTypes.object.isRequired,

  label: PropTypes.string.isRequired,

  propertyName: PropTypes.string.isRequired,

  validation_obj: PropTypes.object.isRequired,


  // optional
  errorToast: PropTypes.bool,

  variant_value: PropTypes.oneOf(['standard', 'filled', 'outlined'])
}



/*-------------------------------------------------------------------
 ✅ defaultProps of <MUI_RHF_PASSWORD___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_PASSWORD___COMPONENT.defaultProps = {
  errorToast: false,
  variant_value: 'filled'

}