// hook
import { useState } from 'react';


// react-use
import { useNetworkState, useUpdateEffect } from 'react-use';

// component
import { Alert, Snackbar } from '@mui/material';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function NETWORK_STATUS___COMPONENT() {

  // useNetworkState hook
  const networkState = useNetworkState()


  // state to track when user goes to offline
  const [offlineSnackbar, setOfflineSnackbar] = useState(false)

  //  state to track when user comes back to online after staying offline 
  const [onlineComeBackSnackbar, SetOnlineComeBackSnackbar] = useState(false)
  

  
  useUpdateEffect(()=>{
    
    // offline
    if(!networkState.online) {
        setOfflineSnackbar(true)
    }

    // Back in Online
    if(!networkState.previous && networkState.online) {
        SetOnlineComeBackSnackbar(true)
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[networkState])



/*-------------------------------------------------------------------
 ✅ JSX 
----------------------------------------------------------------------*/
  return (

    <>

        {/* Offline */}
        <Snackbar
          open={offlineSnackbar}
          onClose={() => setOfflineSnackbar(false)}
          autoHideDuration={5000}>

            <Alert severity="error" variant="filled">You are offline!</Alert>

        </Snackbar>


       {/* Back online */}
        <Snackbar
          open={onlineComeBackSnackbar}
          onClose={() => SetOnlineComeBackSnackbar(false)}
          autoHideDuration={5000}>

            <Alert severity="success" variant="filled">You are back online.</Alert>

        </Snackbar>
       
    </>

  )

}




