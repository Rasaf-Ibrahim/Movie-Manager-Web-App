
// mui
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';


// react hook
import { useState } from 'react';

// styled-components
import { styled } from '@mui/material/styles'


// icons
import BookmarkIcon from "@mui/icons-material/Bookmark";
import  QueueIcon from '@mui/icons-material/Queue';
import DoneAllIcon from '@mui/icons-material/DoneAll';



// components
import { Box, Tab, Tabs } from '@mui/material'

import FAVORITE_MOVIES___COMPONENT from './favorite-movies/favorite-movies';
import YET_TO_WATCH_MOVIES___COMPONENT from './yet-to-watch-movies/yet-to-watch-movies';
import ALREADY_WATCHED_MOVIES___COMPONENT from './already-watched-movies/already-watched-movies';





/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function BOOKMARKED_MOVIES___COMPONENT() {

    const theme = useTheme();
    const phone_and_tablet = useMediaQuery(theme.breakpoints.down('md'));


    return (

        <>

            {phone_and_tablet ? <PHONE_TAB___COMPONENT /> : <DESKTOP_TAB___COMPONENT />}

        </>

    )

}









/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
function PHONE_TAB___COMPONENT() {


    // when we select a tab, the state changes
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }


    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <WRAPPER_OF_JSX___STYLED>


            <WRAPPER_OF_ALL_TABS___STYLED>


                <ALL_TABS___STYLED
                    value={selectedTab}
                    onChange={handleChange}
                >

                    <ONE_TAB___STYLED
                        label="Favorite"
                        icon={<BookmarkIcon />}
                    />


                    <ONE_TAB___STYLED
                        label="Yet to Watch"
                        icon={<QueueIcon />}
                    />



                    <ONE_TAB___STYLED
                        label="Already Watched"
                        icon={<DoneAllIcon />}
                    />


                </ALL_TABS___STYLED>

            </WRAPPER_OF_ALL_TABS___STYLED>



            {selectedTab === 0 && <FAVORITE_MOVIES___COMPONENT />}


            {selectedTab === 1 && <YET_TO_WATCH_MOVIES___COMPONENT />}


            {selectedTab === 2 && <ALREADY_WATCHED_MOVIES___COMPONENT />}



        </WRAPPER_OF_JSX___STYLED>


    )
}



/*-------------------------------------------------------------------
 ✅ Styled Components  for <PHONE_TAB___COMPONENT/>
----------------------------------------------------------------------*/


/* 🍔 */
const WRAPPER_OF_JSX___STYLED = styled((props) =>

    <Box {...props} />
)

    (({ theme }) => `
    
        width: 100%; 
        

        ${/*as the tabs' section is fixed at the end of the screen, we must have extra margin-bottom so that we can scroll and see the full content of the page.*/''}
        margin-bottom:5rem; 
    
    `)


/* 🍔 */
const WRAPPER_OF_ALL_TABS___STYLED = styled((props) =>

    <Box {...props} />

)

    (({ theme }) => `
    
        ${/*We want to put the tabs at the bottom of the mobile screen*/''}
        position: fixed;
        bottom: 0;
        z-index:999;

        width: 100%;

        background-color:${theme.palette.background.variation_1};


        display:flex;
        justify-content:center;

    `)



/* 🍔 */
const ALL_TABS___STYLED = styled((props) =>

    <Tabs  {...props}
        orientation="horizontal"

        variant="scrollable"
        allowScrollButtonsMobile

        textColor="primary"
        indicatorColor="primary" />
)

    (({ theme }) => `


        ${/* don't want to see the selected tab's indicator */''}
        & .MuiTabs-indicator {
            opacity:0;
        }  

        ${/* changing some styles of the scroll buttons */''}
        > .MuiTabs-scrollButtons {
    
            padding-right:0.2rem;
            padding-left:0.2rem;

            ${/* very minimal box-shadow, it work like left and right border */''}
            box-shadow: 0px 0px 1px 1px ${theme.palette.divider};

        }


        ${/* changing style of the scroll button's icon*/''}
        > .MuiButtonBase-root .MuiSvgIcon-root {

            font-size:1.5rem;
        }


        ${/* if the tabs are scrollable, always want the scroll button to be visible even when they are disable */''}
        > .MuiTabs-scrollButtons.Mui-disabled {
            opacity: 0.3;
        }

        `
    )




/* 🍔 */
const ONE_TAB___STYLED = styled((props) =>

    <Tab
        {...props}
        disableRipple
        iconPosition="top" />
)

    (({ theme }) => `

        ${/* changing selected tab's style */''}
        &.Mui-selected{

        background-color:${theme.palette.primary.dark};
        color:${theme.palette.text.opposite_theme.primary};
        }

        
        ${/* I want bigger icon, smaller label */ ''}
        
        ${/* changing label's font size */''}
        &.MuiTab-labelIcon{
        font-size:${theme.typography.caption.fontSize};
        }

        ${/* changing icon's font size */''}
        >.MuiSvgIcon-root{
        font-size:${theme.typography.h6.fontSize};

        }

    `
)






/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
function DESKTOP_TAB___COMPONENT() {


    // when we select a tab, the state changes
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }


    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (


        <WRAPPER_OF_JSX_OF_DESKTOP_TAB___STYLED>


            <WRAPPER_OF_ALL_TABS_OF_DESKTOP_TAB___STYLED>

                <ALL_TABS_OF_DESKTOP_TAB___STYLED
                    value={selectedTab}
                    onChange={handleChange}>


                    <ONE_TAB_OF_DESKTOP_TAB___STYLED
                        label="Favorite"
                        icon={<BookmarkIcon />}
                    />


                    <ONE_TAB_OF_DESKTOP_TAB___STYLED
                        label="Yet to Watch"
                        icon={<QueueIcon />}
                    />



                    <ONE_TAB_OF_DESKTOP_TAB___STYLED
                        label="Already Watched"
                        icon={<DoneAllIcon />}
                    />



                </ALL_TABS_OF_DESKTOP_TAB___STYLED>

            </WRAPPER_OF_ALL_TABS_OF_DESKTOP_TAB___STYLED>




            <WRAPPER_OF_COMPONENTS___STYLED>
                {/* Content of the tab */}

                {selectedTab === 0 && <FAVORITE_MOVIES___COMPONENT />}

                {selectedTab === 1 && <YET_TO_WATCH_MOVIES___COMPONENT />}

                {selectedTab === 2 && <ALREADY_WATCHED_MOVIES___COMPONENT />}


            </WRAPPER_OF_COMPONENTS___STYLED>



        </WRAPPER_OF_JSX_OF_DESKTOP_TAB___STYLED>

    )
}






/*-------------------------------------------------------------------
 ✅ Styled Components for <DESKTOP_TAB___COMPONENT/>
----------------------------------------------------------------------*/

/* 🍔 */
const WRAPPER_OF_JSX_OF_DESKTOP_TAB___STYLED = styled((props) =>

    <Box {...props} />
)

    (({ theme }) => `

        width: 100%; 
        margin-top: '1rem' 
        
    `)



/* 🍔 */
const WRAPPER_OF_ALL_TABS_OF_DESKTOP_TAB___STYLED = styled((props) =>

    <Box {...props} />
)

    (({ theme }) => `

    border-bottom: 0.1rem solid ${theme.palette.divider};

    display: flex; 
    justify-content: center;  
    `)



/* 🍔 */
const ALL_TABS_OF_DESKTOP_TAB___STYLED = styled((props) =>

    <Tabs  {...props}
        orientation="horizontal"
        variant="scrollable"

        textColor="primary"
        indicatorColor="primary" />
)

    (({ theme }) => `

    ${/* don't want to see the selected tab's indicator */''}
    & .MuiTabs-indicator {
        opacity:0;
    }  

    ${/* changing some styles of the scroll buttons */''}
    > .MuiTabs-scrollButtons {

        padding-right:0.2rem;
        padding-left:0.2rem;

        ${/* very minimal box-shadow, it work like left and right border */''}
        box-shadow: 0px 0px 1px 1px ${theme.palette.divider};
    }

    ${/* changing style of the scroll button's icon*/''}
    > .MuiButtonBase-root .MuiSvgIcon-root {

        font-size:1.5rem;
    }

    ${/* if tabs are scrollable, always want the scroll button to be visible even when they are disable */''}
    > .MuiTabs-scrollButtons.Mui-disabled {
        opacity: 0.3;
    }
        
    `)



/* 🍔  */
const ONE_TAB_OF_DESKTOP_TAB___STYLED = styled((props) =>

    <Tab
        {...props}
        disableRipple
        iconPosition="top" />

)

    (({ theme }) => `

        ${/* changing selected tab's style */''}
        &.Mui-selected{

        background-color:${theme.palette.primary.dark};
        color:${theme.palette.text.opposite_theme.primary};
        }

        ${/* I want bigger icon, smaller label */ ''}
        
        ${/* changing label's font size */''}
        &.MuiTab-labelIcon{
        font-size:${theme.typography.caption.fontSize};
        }

        ${/* changing icon's font size */''}
        >.MuiSvgIcon-root{
        font-size:${theme.typography.h6.fontSize};

        }
    
    `)


/* 🍔 */
const WRAPPER_OF_COMPONENTS___STYLED = styled((props) =>

    <Box {...props} />
)

    (({ theme }) => `

    margin-top:1rem;

    display: flex; 
    justify-content: center; 

    `)
