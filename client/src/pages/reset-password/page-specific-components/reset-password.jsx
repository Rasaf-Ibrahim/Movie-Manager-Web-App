// router hook
import { useLocation } from 'react-router-dom';


// form management hook
import useFormManagement from "@/utils/global-hooks/use-form-management.js";

// api hook
import { useResetPassword } from '@/api/auth/reset-password';

// styled-components
import { styled } from "@mui/material/styles";
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link';

// components
import { Box, Button, Container, Typography } from '@mui/material';
import MUI_PASSWORD___COMPONENT from '@/components/reusable/for-any-project/form/mui-form-useImmer/mui-password';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function RESET_PASSWORD___COMPONENT() {


    // 🍪 extract the token 
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get("token")


    // 🍪 hook related to API request 🍪
    const { mutate, status, data, error } = useResetPassword()





    /*-------------------------------------------------------------------
      ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <>

            {status === 'success' ?

                <PASSWORD_IS_RESET_SUCCESSFULLY___SECTION />

                :

                <FILL_FORM_AND_RESET_PASSWORD___SECTION token={token} mutate={mutate} status={status} data={data} error={error} />
            }

        </>

    )


}





/*-------------------------------------------------------------------
✅ Sections of <SEND_EMAIL_VERIFICATION_MAIL___COMPONENT/>
----------------------------------------------------------------------*/


// 🍪
const FILL_FORM_AND_RESET_PASSWORD___SECTION = ({ token, mutate, status, data, error }) => {



    // 🍪 form state management (1/3 Steps) - form_configuration 🍪
    const form_configuration = {

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

        formData.append('new_password', formState.form_data.password.value)

        formData.append('password_reset_token', token)

        await mutate(formData);


        /* 🍔🍔 form is submitted successfully  🍔🍔*/

        // actions.reset_form()

    }



    return (

        <CONTAINER___STYLED>


            <Typography variant="h6" sx={{ marginBottom: '1.5rem' }}>
                Reset Password
            </Typography>


            <WRAPPER_OF_FORM___STYLED>


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
                    disabled={status === 'loading' || status === 'success'}
                    variant="contained"
                    sx={{ marginTop: '1rem' }}
                >
                    Reset
                </Button>


                {status === 'error' &&

                    /* server error message */
                    <Box sx={{ marginTop: '1rem', display: 'grid', gap: '1.5rem' }}>

                        <Typography variant='body1' color='error.main'>

                            {(() => {

                                if (error.response.data.message.toLowerCase().includes('invalid')) {
                                    return "The token is invalid. You may have mistakenly changed the URL. You need to request for the password reset again."
                                }

                                else if (error.response.data.message.toLowerCase().includes('expired')) {
                                    return "The token have expired. You need to request for the password reset again."
                                }

                                else {
                                    return error.response.data.message
                                }

                            })()}

                        </Typography>



                        <ROUTER_LINK___STYLED to='/send-password-reset-mail'>

                            <Button variant='contained'>
                                Visit Password Reset Mail Page
                            </Button>

                        </ROUTER_LINK___STYLED>

                    </Box>
                }


            </WRAPPER_OF_FORM___STYLED>

        </CONTAINER___STYLED>
    )


}



// 🍪
const PASSWORD_IS_RESET_SUCCESSFULLY___SECTION = ({ password_reset }) => {



    return (

        <CONTAINER___STYLED>

            <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                Your Password has been Reset
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    marginBottom: '2rem',
                    textAlign: 'justify',
                    textAlignLast: 'center'
                }}
            >

                Congratulations! Your password has been reset. Sign in with the new password. Click the following button to visit the sign in page.
            </Typography>


            <ROUTER_LINK___STYLED to='/sign-in'>

                <Button variant='contained'>
                    Sign in Page
                </Button>

            </ROUTER_LINK___STYLED>


        </CONTAINER___STYLED>

    )
}






/*-------------------------------------------------------------------
✅ Styled Components for multiple sections
----------------------------------------------------------------------*/

const CONTAINER___STYLED = styled((props) =>

    <Container {...props} maxWidth="sm" />

)(({ theme }) => `

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center; 
    margin-top:2.5rem;
    
`)


/*-------------------------------------------------------------------
✅ Styled Components for <FILL_FORM_AND_RESET_PASSWORD___SECTION/>
----------------------------------------------------------------------*/


const WRAPPER_OF_FORM___STYLED = styled((props) =>

    <Box {...props} component='form' />

)(({ theme }) => `


    ${/* width */''}
    width: 18rem;


    ${/* flex */''}
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center; 
    gap:1rem;

`)


