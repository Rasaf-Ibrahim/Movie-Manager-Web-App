// hook
import useFormManagement from "@/utils/global-hooks/use-form-management.js";
import { useLogger } from "react-use";
import { useSignupUser } from "@/api/auth/signup-user";


// styled components
import { styled } from '@mui/material/styles';



// components
import { Box, Button } from "@mui/material";

import MUI_INPUT___COMPONENT from "@/components/reusable/for-any-project/form/mui-form-useImmer/mui-input";
import MUI_PASSWORD___COMPONENT from "@/components/reusable/for-any-project/form/mui-form-useImmer/mui-password";






/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SIGN_UP_WITH_EMAIL___COMPONENT() {


    // 🍪 form state management (1/3 Steps) - form_configuration 🍪
    const form_configuration = {


        /* 🍔  full_name  🍔 */
        full_name: {

            value: '',

            is_required: true,

            validation: {

                is_validating: true,

                match_pattern: /^[A-Za-z\s.-]{3,60}$/,

                error_message: "Please enter a valid name containing only English letters, spaces, dots, or hyphens, with a length between 3 and 60 characters."
            }

        },



        /* 🍔  email  🍔 */
        email: {

            value: '',

            is_required: true,

            validation: {

                is_validating: true,

                match_pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,

                error_message: "Provide a valid Email."
            }

        },




        /* 🍔 password  🍔 */
        password: {

            value: '',

            is_required: true,

            validation: {

                is_validating: true,

                match_pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,

                error_message: "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
            }

        },


        /* 🍔 password_confirm  🍔 */
        password_confirm: {

            value: '',

            is_required: true,

            validation: {

                is_validating: true,

                match_this_field: 'password',

                error_message: "Confirm password must match with the password."
            }

        },





    }


    // 🍪 form state management (2/2 Steps) - useFormManagement 🍪
    const {
        formState,
        updateFormState,
        actions,
        validation_info,
        validation_before_form_submission_func

    } = useFormManagement(form_configuration)



    useLogger('formState', formState)



    // 🍪 hook related to API request 🍪
    const { mutate, status, data, error } = useSignupUser();



    // useLogger('status', status)
    // useLogger('data', data)
    // useLogger('error', error)


    // 🍪 form state management (3/3 Steps) - handleSubmit 🍪
    const handleSubmit = async (event) => {

        // 🍔🍔 stop refreshing the page on reload 🍔🍔
        event.preventDefault();



        /* 🍔🍔 if 'validation_before_form_submission_func' function returns true, that means there is at least one validation error in the form and we can not submit the form 🍔🍔 */
        if (validation_before_form_submission_func() === true) return



        /* 🍔🍔 submit the form's all the inputted data 🍔🍔 */
        console.log('😃 submitting data', {
            ...formState.form_data
        })


        // 🍔🍔 API request  🍔🍔
        const formData = new FormData();

        formData.append('full_name', formState.form_data.full_name.value)
        formData.append('email', formState.form_data.email.value)
        formData.append('password', formState.form_data.password.value)
        formData.append('password_confirm', formState.form_data.password_confirm.value)


        await mutate(formData);


        // not resetting the form because there can be error if username or email is duplicated
        // actions.reset_form()

    }




    /*-------------------------------------------------------------------
        ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <WRAPPER_OF_FORM_CONTENT___STYLED>



            {/* 🍔🍔 Full Name 🍔🍔 */}
            <MUI_INPUT___COMPONENT

                label='Full Name'

                input_name='full_name'

                state={formState}

                actions={actions}

                validation_info={validation_info}

                // optional
                multiline={false}
                variant_value='outlined' //standard, filled, outlined

            />



            {/* 🍔🍔 Email 🍔🍔 */}
            <MUI_INPUT___COMPONENT

                label='Email'

                input_name='email'

                state={formState}

                actions={actions}

                validation_info={validation_info}

                // optional
                multiline={false}
                variant_value='outlined' //standard, filled, outlined

            />



            {/* 🍔🍔 Password 🍔🍔 */}
            <MUI_PASSWORD___COMPONENT

                label='Password'

                input_name='password'

                state={formState}

                actions={actions}

                validation_info={validation_info}


                // optional
                variant_value='outlined'  //standard, filled, outlined
            />



            {/* 🍔🍔 Password Confirm🍔🍔 */}
            <MUI_PASSWORD___COMPONENT

                label='Confirm Password'

                input_name='password_confirm'

                state={formState}

                actions={actions}

                validation_info={validation_info}


                // optional
                variant_value='outlined'  //standard, filled, outlined

            />



            <Button
                type="button"
                onClick={handleSubmit}
                disabled={status && status === 'loading'}
                variant="contained"
            >
                Sign Up
            </Button>


        </WRAPPER_OF_FORM_CONTENT___STYLED>

    )


}





/*-------------------------------------------------------------------
 ✅ Styled Components for <SIGN_UP_WITH_EMAIL___COMPONENT/>
----------------------------------------------------------------------*/

const WRAPPER_OF_FORM_CONTENT___STYLED = styled((props) =>

    <Box  {...props} component='form' />
)

    (({ theme }) => `

    display:flex;
    flex-direction:column;
    align-items: center;
    gap:1rem;

`)