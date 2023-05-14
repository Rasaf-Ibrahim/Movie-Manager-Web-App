import { useState } from 'react';
import { useLogger, useUpdateEffect } from 'react-use';


// api hook
import { useServerHealthCheck } from '@/api/server-health-check/server-health-check';

// zustand store & immer
import { server_health_store } from '@/store/server-health-store';
import produce from 'immer'


//  react-toastify
import { toast } from "react-toastify";

// components
import { Box, Typography, Modal, Backdrop, Fade } from "@mui/material"




export default function SERVER_HEALTH_CHECK___COMPONENT() {


    // 🍪  useServerHealthCheck hook
    const { isFetching, isSuccess, isLoadingError, isRefetchError } = useServerHealthCheck()


   // useLogger('isFetching', isFetching) // Is true whenever the queryFn is executing, which includes initial loading as well as background refetches.

   useLogger('isFetching', isFetching)

   useLogger('isSuccess', isSuccess)

   useLogger('isLoadingError', isLoadingError)

   useLogger('isRefetchError', isRefetchError)


    // 🍪 get the state properties 
    const {
        server_is_sleeping,
        server_is_running,
        server_is_down
    } = server_health_store(state => ({

        server_is_sleeping: state?.server_is_sleeping,
        server_is_running: state?.server_is_running,
        server_is_down: state?.server_is_down,
    }))





    // 🍪 checking whether the server is down 
    useUpdateEffect(() => {

        // server is down 
        if (isLoadingError || isRefetchError) {

            server_health_store.setState(produce((draft) => {

                draft.server_is_running = false
                draft.server_is_sleeping = false
                draft.server_is_down = true

            }))

        }

    }, [isLoadingError, isRefetchError])



    // 🍪 checking whether the server is sleeping  
    useUpdateEffect(()=> {


        const timer = setTimeout(() => {

            // server is sleeping
            if (isFetching) {

                server_health_store.setState(produce((draft) => {

                    draft.server_is_running = false
                    draft.server_is_sleeping = true
                    draft.server_is_down = false

                }))

            }


        }, 5000);


        return () => clearTimeout(timer);

       

    },[isFetching])



    // 🍪 server has awaken up from sleep or down state
    useUpdateEffect(() => {

        if (isSuccess &&  (server_is_sleeping || server_is_down)) {

            server_health_store.setState(produce((draft) => {

                draft.server_is_running = true
                draft.server_is_sleeping = false
                draft.server_is_down = false

            }))


            toast.success('The server is up and running')
            
        }

    }, [isSuccess])



    return (

        <>

            <SERVER_IS_DOWN_MODAL___SECTION 
                server_is_down={server_is_down}
                server_is_running = {server_is_running}
            />


            <SERVER_IS_SLEEPING_MODAL___SECTION                  
                server_is_sleeping={server_is_sleeping}
                server_is_running ={server_is_running} 
            
            />

        </>
    )

}




// 🍪
function SERVER_IS_DOWN_MODAL___SECTION({ server_is_down, server_is_running }) {


    const [open, setOpen] = useState(server_is_down);


    useUpdateEffect(() => {

        if (server_is_down) {
            setOpen(true)
        }

        else {
            setOpen(false)
        }

    }, [server_is_down])



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }




    return (

        <Box>

            <Modal
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >

                <Fade in={open}>

                    <Box sx={style}>

                        <Typography variant="h6" align='center' color='primary.main'>
                            Server is Down!
                        </Typography>

                        <Typography sx={{ marginTop: '1rem' }} align='justify'>
                            The server is currently down because we are using a free hosting service. Free hosting services often have limited resources, which can lead to downtime. We apologize for any inconvenience this may cause.


                        </Typography>

                        <Typography sx={{ marginTop: '1rem' }} align='justify'>
                            We are working on upgrading to a paid service, which will give us more resources and improve uptime. In the meantime, we appreciate your patience.
                        </Typography>

                    </Box>

                </Fade>

            </Modal>

        </Box>
    )
}



// 🍪
function SERVER_IS_SLEEPING_MODAL___SECTION({ server_is_sleeping, server_is_running }) {


    const [open, setOpen] = useState(server_is_sleeping);


    useUpdateEffect(() => {

        if (server_is_sleeping) {
            setOpen(true)
        }

        else {
            setOpen(false)
        }

    }, [server_is_sleeping])



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }



    return (

        <Box>

            <Modal
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >

                <Fade in={open}>

                    <Box sx={style}>

                        <Typography variant="h6" align='center' color='primary.main'>
                            Please wait 20 seconds!
                        </Typography>

                        <Typography sx={{ marginTop: '1rem' }} align='justify'>
                            Our server is hosted on a free service that puts the server in sleep mode after 15 minutes of inactivity.  The server will wake up in 20 seconds.
                        </Typography>

                        <Typography sx={{ marginTop: '1rem' }} align='justify'>
                            We are working on upgrading to a paid service, which will resolve this issue. In the meantime, we appreciate your patience.
                        </Typography>

                    </Box>

                </Fade>

            </Modal>

        </Box>
    )
}

