// hook
import { useState } from 'react';

// styled components
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link';


// components
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'


// icons
import {
    Inbox,
    Drafts,
    Send,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material'




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function NAV_LIST___COMPONENT() {



    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (
        <List>


            {/* if you don't need nested items, use <ONE_ITEM___SECTION/> */}
            <ONE_ITEM___SECTION
                item_info={{
                    link: '/',
                    icon: <Inbox />,
                    label: 'Inbox'
                }}
            />


            {/* if you need nested items, use <NESTED_ITEMS___SECTION/> */}

            <NESTED_ITEMS___SECTION

                category_info={{
                    // icon is optional
                    label: 'Send'
                }}


                items_info={[

                    {
                        link: '/',
                        label: 'Inbox',
                        icon: <Inbox />
                    },

                    {
                        link: '/',
                        label: 'Drafts',
                        icon: <Drafts />
                    }

                ]}

            />



        </List>
    )
}




/*-------------------------------------------------------------------
 ✅ Section of <NAV_LIST___COMPONENT/>
----------------------------------------------------------------------*/


const ONE_ITEM___SECTION = ({ item_info }) => {


    return (

        <ROUTER_LINK___STYLED to={item_info.link}>

            <ListItemButton>

                <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                    {item_info.icon}
                </ListItemIcon>

                <ListItemText primary={item_info.label} />

            </ListItemButton>

        </ROUTER_LINK___STYLED>
    )
}



/*-------------------------------------------------------------------
 ✅ Section of <NAV_LIST___COMPONENT/>
----------------------------------------------------------------------*/


const NESTED_ITEMS___SECTION = ({ category_info, items_info }) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }


    return (

        <>

            {/* Label and icon of the category of the nested items_info */}
            <ListItemButton onClick={handleClick}>

                <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                    {category_info.icon}
                </ListItemIcon>

                <ListItemText primary={category_info.label} />

                {open ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>



            {/* Nested Items  */}
            <Collapse in={open} timeout="auto" unmountOnExit>

                <List sx={{ paddingLeft: '1rem' }}>

                    {items_info.map((item_info) => {

                        return (

                            <ROUTER_LINK___STYLED to={item_info.link}>

                                <ListItemButton>

                                    <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                                        {item_info.icon}
                                    </ListItemIcon>

                                    <ListItemText primary={item_info.label} />

                                </ListItemButton>

                            </ROUTER_LINK___STYLED>
                        )


                    })}

                </List>

            </Collapse>

        </>

    )
}