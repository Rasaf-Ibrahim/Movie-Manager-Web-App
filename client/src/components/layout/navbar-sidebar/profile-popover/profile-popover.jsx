// hook
import { useState } from "react"

// store

import { user_store } from "@/store/user-store"

// component
import { Avatar, Popover } from "@mui/material"
import POPOVER_CONTENT___COMPONENT from "./popover-content/popover-content"


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function PROFILE_POPOVER___COMPONENT() {

    // 🍪 state to show and hide popover
    const [showPopover, SetShowPopover] = useState(null);

    const handleClick = (event) => {
        SetShowPopover(event.currentTarget);
    }

    const handleClose = () => {
        SetShowPopover(null);
    }




    // 🍪 get the state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))






    return (

        <>
            <Avatar
                onClick={handleClick}
                src={user_info.picture_link}
                alt={user_info.username}
            >
                {/* if the user has no profile, we will show the first letter of the username as avatar */}
                {user_info.username.slice(0, 1)}

            </Avatar>



            <Popover
                open={Boolean(showPopover)}
                anchorEl={showPopover}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 42,
                    horizontal: 'center',
                }}

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>


                <POPOVER_CONTENT___COMPONENT />


            </Popover>

        </>

    )
}