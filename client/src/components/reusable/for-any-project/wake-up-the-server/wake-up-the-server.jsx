// hook
import { useState } from 'react';
import { useMount, useUpdateEffect } from 'react-use';


// api hook
import { useWakeUpTheServer } from '@/api/wake-up-the-server/wake-up-the-server';


// importing react-toastify
import { toast } from "react-toastify";


// components
import {Box, Typography, Modal, Backdrop, Fade} from "@mui/material"




export default function WAKE_UP_THE_SERVER() {


    // 🍪  useWakeUpTheServer hook
    const { isLoading, isSuccess, isError, data, error, refetch } = useWakeUpTheServer()



    useMount(()=> {

        refetch()

    })



    let [show_message, set_show_message] = useState(false)



    useUpdateEffect(() => {
      
        const timer = setTimeout(() => {
  
  
          if(isLoading) {
            toast.info('Waking up the server in 20 seconds. Due to inactivity, server was sleeping!')
  
            set_show_message(true)
          }

          else{
            
            console.log('The server was awake')
          }
  
        }, 3000);
  
        return () => clearTimeout(timer);
  
    }, [isLoading])




    useUpdateEffect(() => {
      
        if(isSuccess && show_message) {
          toast.success('Server has awoken up!')
        }

    }, [isSuccess, show_message])



    return (

        <>
              <MODAL___COMPONENT show_message={show_message} isLoading={isLoading} isSuccess={isSuccess}/>
        </>
    )
}







function MODAL___COMPONENT({show_message, isLoading, isSuccess}) {


    const [open, setOpen] = useState(false);
  
  
    // opening and closing the modal based on condition
    useUpdateEffect(()=>{
  
      if(show_message && isLoading) {
          setOpen(true)
      }
  
      else if(show_message && isSuccess) {
          setOpen(false)
      }
  
    },[isLoading, show_message, isSuccess])
  
  
  
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
  
              <Typography  variant="h6" align='center' color='primary.main'>
                  Please wait 20 seconds!
              </Typography>
  
              <Typography sx={{ marginTop:'1rem' }} align='justify'>
                  Due to inactivity, the server was sleeping. Waking up the server in 20 seconds.
              </Typography>
  
              <Typography sx={{ marginTop:'1rem' }} align='justify'>
                  When no user uses the application for more than 15 minutes, we put the server in sleep mode to minimize the server cost. Sorry for the inconvenience.
              </Typography>
  
              </Box>
              
          </Fade>
  
        </Modal>
  
      </Box>
    )
  }