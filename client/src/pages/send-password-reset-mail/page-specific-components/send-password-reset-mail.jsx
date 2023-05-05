// hook
import { useState } from 'react';
import { useMount } from 'react-use';

// form management hook
import useFormManagement from "@/utils/global-hooks/use-form-management.js";

// api hook
import { usePasswordResetMail } from '@/api/auth/send-password-reset-mail';

// store
import { user_store } from '@/store/user-store';

// date-fns
import { format } from 'date-fns';

// styled-components
import { styled } from "@mui/material/styles";

// components
import { Box, Button, Container, Typography } from '@mui/material';
import MUI_INPUT___COMPONENT from '@/components/reusable/for-any-project/form/mui-form-useImmer/mui-input';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SEND_PASSWORD_RESET_MAIL___COMPONENT() {

    // 🍪 get the state properties 
    const { password_reset } = user_store(state => ({
        password_reset: state?.password_reset
    }))


    // 🍪 state to track whether the email is sent and url has not expired
    const [email_is_sent_and_url_has_not_expired, set_email_is_sent_and_url_has_not_expired] = useState(false)


    // 🍪 on  the initial load or page refresh, checking whether the email is sent and url has not expired
    useMount(() => {
        if (!password_reset?.url_expiration_timestamp) return

        if (password_reset && password_reset.url_expiration_timestamp > Date.now()) {
            set_email_is_sent_and_url_has_not_expired(true)
        }

    })



    // 🍪 hook related to API request 🍪
    const { mutate, status, data, error } = usePasswordResetMail()







    /*-------------------------------------------------------------------
    ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <>

            {email_is_sent_and_url_has_not_expired || status === 'success' ?

                <EMAIL_IS_ALREADY_SENT___SECTION password_reset={password_reset} />

                :

                <SEND_EMAIL___SECTION mutate={mutate} status={status} />
            }

        </>

    )

}





/*-------------------------------------------------------------------
✅ Sections of <SEND_EMAIL_VERIFICATION_MAIL___COMPONENT/>
----------------------------------------------------------------------*/


// 🍪
const SEND_EMAIL___SECTION = ({ mutate, status }) => {



    // 🍪 form state management (1/3 Steps) - form_configuration 🍪
    const form_configuration = {

        /* 🍔  email  🍔 */
        email: {

            value: '',

            is_required: true,

            validation: {

                is_validating: true,

                match_pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,

                error_message: "Provide a valid Email."
            }

        }

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

        formData.append('email', formState.form_data.email.value)

        await mutate(formData);


        /* 🍔🍔 form is submitted successfully  🍔🍔*/

        // actions.reset_form()

    }



    return (

        <CONTAINER___STYLED>


            <Typography variant="h6" sx={{ marginBottom: '1.5rem' }}>
                Reset Password
            </Typography>



            <Box sx={{ marginBottom: '1rem' }}>

                {/* 🍔🍔 Email 🍔🍔 */}
                <MUI_INPUT___COMPONENT

                    label='Enter your email address'

                    input_name='email'

                    state={formState}

                    actions={actions}

                    validation_info={validation_info}

                    // optional
                    multiline={false}
                    variant_value='outlined' //standard, filled, outlined

                />

            </Box>


            <Button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'loading' || status === 'success'}
                variant="contained">
                Send
            </Button>


        </CONTAINER___STYLED>
    )


}



// 🍪
const EMAIL_IS_ALREADY_SENT___SECTION = ({ password_reset }) => {


    // create a new Date object from the timestamp
    let date = new Date(password_reset.url_expiration_timestamp)

    // Define a format string for the date and time
    let formatString = "'at' hh:mm a 'on' MMMM d, yyyy";

    // format the date and time using date-fns
    let time = format(date, formatString);



    return (

        <CONTAINER___STYLED>


            <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                Password Reset Email is Sent
            </Typography>


            <Typography variant="body1" sx={{ marginBottom: '2rem', textAlign: 'justify', textAlignLast: 'center' }}>

                Password reset email has been sent to

                <Box component='span' sx={{ color: 'primary.main' }}> {password_reset.email}. </Box>

                If you don't see any email on your inbox, please check the spam folder as well.
            </Typography>


            <Typography variant='body1'>

                There is a link in the email, you need to click on the link. The link will expire

                <Box component='span' sx={{ color: 'primary.main' }}> {time} </Box>


            </Typography>




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





