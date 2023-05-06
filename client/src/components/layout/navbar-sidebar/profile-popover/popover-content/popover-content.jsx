// hooks
import useSwitchMuiTheme from '@/utils/global-hooks/use-switch-mui-theme.js';
import { useTheme } from '@mui/material';

// importing router
import { useNavigate } from 'react-router-dom';

// importing zustand store & immer
import { user_store } from "@/store/user-store"


// icons
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GridViewIcon from '@mui/icons-material/GridView';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';


// components
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon, Switch, Divider } from '@mui/material';
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link';




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function POPOVER_CONTENT___COMPONENT() {


    const { switchTheme } = useSwitchMuiTheme()
    const theme = useTheme()

    // navigate
    const navigate = useNavigate()


    // sign out
    const handle_sign_out = () => {

        // delete everything from store
        user_store.setState({}, true);


        // navigate to the landing page
        navigate('/')

    }



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (
        <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>


            {/* Profile */}
            <ROUTER_LINK___STYLED to='/profile'>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon sx={{ fontSize: '2rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
            </ROUTER_LINK___STYLED>


            {/* Dashboard */}
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <GridViewIcon sx={{ fontSize: '2rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </ListItem>


            <ListItem>
                <ListItemButton disableRipple>
                    <ListItemIcon>
                        <DarkModeIcon sx={{ fontSize: '2rem' }} />
                    </ListItemIcon>

                    <ListItemText id="switch-list-label-wifi" primary="Dark Theme" />
                    <Switch
                        onClick={switchTheme}
                        edge="end"
                        checked={theme.palette.mode === 'dark' ? true : false}
                    />
                </ListItemButton>
            </ListItem>


            <Divider />


            {/* Sign out */}
            <ListItem onClick={handle_sign_out}>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon sx={{ fontSize: '2rem' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign out" />
                </ListItemButton>
            </ListItem>


        </List>
    )
}
