// react-use hook
import { useLogger, useMount } from "react-use";

// router hook
import { useLocation } from "react-router-dom";

// api hook
import { useVerifyEmail } from "@/api/auth/verify-email";

// styled-components
import { styled } from "@mui/material/styles"
import ROUTER_LINK___STYLED from "@/styles/styled-components/router-link/router-link"

// components
import { Typography, Button, Container } from "@mui/material"
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner"


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function VERIFY_EMAIL___COMPONENT() {



    // 🍪 extract the token 
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get("token")


    // 🍪 hook related to API request 
    const { mutate, status, data, error } = useVerifyEmail()

    useLogger('error', error)


    // 🍪 API request on mount
    useMount(async () => {

        const formData = new FormData();

        formData.append('email_verification_token', token)

        await mutate(formData);

    })



    /*-------------------------------------------------------------------
    ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <>

            {/* 🍪 Loading 🍪 */}
            {status === 'loading' &&

                <CONTAINER___STYLED>

                    <Typography variant="body1" color='primary.main'>
                        Verifying the email..
                    </Typography>

                    <LOADING_SPINNER___COMPONENT fullPage={false} margin='3rem' />

                </CONTAINER___STYLED>

            }



            {/* 🍪 Success 🍪 */}
            {status === 'success' &&

                <CONTAINER___STYLED>

                    <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                        Your email is verified.
                    </Typography>

                    <Typography variant="body1" sx={{ marginBottom: '2rem', textAlign: 'justify', textAlignLast: 'center' }}>
                        Congratulations! Your account is activated. Click the following button to visit the home page.
                    </Typography>


                    <ROUTER_LINK___STYLED to='/'>

                        <Button variant='contained'>
                            Home Page
                        </Button>

                    </ROUTER_LINK___STYLED>


                </CONTAINER___STYLED>

            }



            {/* 🍪 Error 🍪 */}
            {status === 'error' &&

                <CONTAINER___STYLED>

                    <Typography variant="h5" sx={{ marginBottom: '1rem' }}>

                        {(() => {

                            if (error.response.data.message.toLowerCase().includes('invalid')) {

                                return "The URL is Invalid."
                            }

                            else if (error.response.data.message.toLowerCase().includes('expired')) {
                                return "The URL has Expired"
                            }

                            else {
                                return error.response.data.message
                            }

                        })()}

                    </Typography>


                    <Typography variant="body1" sx={{ marginBottom: '2rem', textAlign: 'justify', textAlignLast: 'center' }}>
                        You need to request for a new verification email. Click the following button to visit the mail sending page.
                    </Typography>


                    <ROUTER_LINK___STYLED to='/send-email-verification-mail'>

                        <Button variant='contained'>
                            Send Mail Page
                        </Button>

                    </ROUTER_LINK___STYLED>


                </CONTAINER___STYLED>

            }

        </>
    )


}




/*-------------------------------------------------------------------
✅ Styled Components for <VERIFY_EMAIL___COMPONENT/>
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

