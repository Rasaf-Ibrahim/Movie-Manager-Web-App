// hook
import { useEffect, useState } from "react";
import { useUpdateEffect } from "react-use";
import { useImmer } from "use-immer";

// api hook
import { useServerHealthCheck } from "@/api/server-health-check/server-health-check";


//  react-toastify
import { toast } from "react-toastify";

// components
import { Box, Typography, Modal, Backdrop, Fade } from "@mui/material";




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SERVER_HEALTH_CHECK___COMPONENT() {


  // 🍪  useServerHealthCheck hook
  const {
    refetch,
    isFetching,
    isSuccess,
    isError,
  } = useServerHealthCheck();



  // 🍪 get the state properties and updater function using useImmer hook
  const [server_health_state, update_server_health_state] = useImmer({
    server_is_running: true,
    server_is_sleeping: false,
    server_is_down: false
  })



  // 🍪 checking whether the server is down
  useUpdateEffect(() => {

    if (isError) {

      update_server_health_state(draft => {

        draft.server_is_running = false;
        draft.server_is_sleeping = false;
        draft.server_is_down = true;

      })
    }


    else if(!isError && isSuccess) {

        update_server_health_state(draft => {

            draft.server_is_running = true;
            draft.server_is_sleeping = false;
            draft.server_is_down = false;

        })

    }

  }, [isError])






  // 🍪 checking whether the server is sleeping
  useEffect(() => {


    const timer = setTimeout(() => {

      // server is sleeping
      if (isFetching) {
        update_server_health_state(draft => {
          draft.server_is_running = false;
          draft.server_is_sleeping = true;
          draft.server_is_down = false;
        })
      }

    }, 3000)


    if(!isFetching && isSuccess) {

        update_server_health_state(draft => {
            draft.server_is_running = true;
            draft.server_is_sleeping = false;
            draft.server_is_down = false;
        })

    }


    return () => clearTimeout(timer)


  }, [isFetching])





/*-------------------------------------------------------------------
 ✅ JSX
----------------------------------------------------------------------*/
  return (

    <>

      <SERVER_IS_DOWN_MODAL___SECTION
        server_is_down={server_health_state.server_is_down}
        isSuccess={isSuccess}
      />


      <SERVER_IS_SLEEPING_MODAL___SECTION
        server_is_sleeping={server_health_state.server_is_sleeping}
        isSuccess={isSuccess}
      />

    </>
  )

}



// 🍪
function SERVER_IS_DOWN_MODAL___SECTION({ server_is_down, isSuccess }) {


    const [open, setOpen] = useState(server_is_down);


    useUpdateEffect(() => {

        if (server_is_down) {
            setOpen(true)
        }

        else {
            setOpen(false)

            if(isSuccess) {
                toast.success("The server is up and running")
            }


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
function SERVER_IS_SLEEPING_MODAL___SECTION({ server_is_sleeping, isSuccess }) {


    const [open, setOpen] = useState(server_is_sleeping);


    useUpdateEffect(() => {

        if (server_is_sleeping) {
            setOpen(true)
        }

        else {
            setOpen(false)

            
            if(isSuccess) {
                toast.success("The server is up and running")
            }
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

