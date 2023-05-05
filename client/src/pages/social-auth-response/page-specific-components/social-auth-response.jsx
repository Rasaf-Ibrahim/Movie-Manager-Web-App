// api hook
import { useSocialAuthResponse } from "@/api/auth/social-auth-response";

// zustand store & immer
import { user_store } from "@/store/user-store";
import produce from 'immer'

// styled-components
import ROUTER_LINK___STYLED from "@/styles/styled-components/router-link/router-link";

// components
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner";


import { Box, Button, Container, Typography } from "@mui/material";



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SOCIAL_AUTH_RESPONSE___COMPONENT() {


    // 🍪 useSocialAuthResponse hook
    const { isLoading, isSuccess, isError, data, error, refetch } = useSocialAuthResponse()



    // 🍪 Update user_store on success response
    if (isSuccess) {

        user_store.setState(produce((draft) => {
            draft.user_info = data.user_info

            draft.access_token = data.access_token
        }))
    }




    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (
        <Container maxWidth='sm' sx={{ marginTop: '2rem' }}>

            <Typography variant="h5" component='h1' color='primary.main' align='center' sx={{ marginBottom: '2rem' }}>
                Authentication Response
            </Typography>


            {/* 🍔 Loading */}
            {isLoading &&

                <>

                    <Typography variant="body1" color='primary.main' align='center'>
                        Loading..
                    </Typography>

                    <LOADING_SPINNER___COMPONENT fullPage={false} margin='3rem' />

                </>

            }


            {/* 🍔 Success */}
            {isSuccess &&

                <SUCCESS_RESPONSE___SECTION data={data} />

            }

            {/* 🍔 Error */}
            {isError &&

                <ERROR_RESPONSE___SECTION error={error} />

            }




        </Container>
    )
}




/*-------------------------------------------------------------------
 ✅ Sections of <MUI_IMAGE___COMPONENT/>
----------------------------------------------------------------------*/


/* 🍪 */
const SUCCESS_RESPONSE___SECTION = ({ data }) => {

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

            {data.message.toLowerCase().includes('signed up') &&

                <Typography variant='body1' align="center">
                    Congratulations. 🎉 Your account has successfully been created.
                </Typography>

            }

            {data.message.toLowerCase().includes('signed in') &&

                <Typography variant='body1' align="center">
                    Welcome back. 😀 You have successfully been signed in.
                </Typography>

            }


            <ROUTER_LINK___STYLED to='/'>

                <Button variant="contained"> Go to Home Page </Button>

            </ROUTER_LINK___STYLED>

        </Box>
    )

}




/* 🍪 */
const ERROR_RESPONSE___SECTION = ({ error }) => {


    // 🍔 get the state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))


    return (

        <>

            {(() => {

                /* 🍔 If the user is already logged in then there is no point of showing error message, so checking for user first */

                if (user_info) {

                    return (

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                            <Typography variant='body1' align='center'>
                                You are already signed in.
                            </Typography>


                            <ROUTER_LINK___STYLED to='/'>

                                <Button variant="contained"> Go back to the Home Page </Button>

                            </ROUTER_LINK___STYLED>

                        </Box>

                    )
                }



                else if (!user_info) {

                    return (

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                            <Typography variant='body1' color='error.main' align='center'>
                                {error?.response?.data.message}
                            </Typography>


                            <ROUTER_LINK___STYLED to='/authentication-project/sign-in'>

                                <Button variant="contained"> Sign in Page </Button>

                            </ROUTER_LINK___STYLED>


                        </Box>
                    )
                }



            })()}

        </>
    )

}