'use client'

/*__________________________________________

 ✅ import 
____________________________________________*/

import MOVIE_NAVIGATION_TABS___REUSABLE from "@/components/reusable/just-for-this-project/movie-manager-app/movie-navigation-tabs/movie-navigation-tabs";


import QueueRoundedIcon from '@mui/icons-material/QueueRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded'


// components
import { Typography } from "@mui/material"

import TABS___REUSABLE, { type_of_tabs } from '@/components/reusable/for-any-project/tabs/tabs'

import MOVIE_FAVORITE___COMPONENT from "./__favorite"
import MOVIE_WATCHED___COMPONENT from "./__watched"
import MOVIE_WATCHLIST___COMPONENT from "./__watchlist"


/*__________________________________________

 ✅ Functional Component 
____________________________________________*/


export default function BOOKMARK___COMPONENT() {


    const tabs: type_of_tabs = [

        {
            tab_name_jsx: <Typography variant='caption'> WatchList </Typography>,
            tab_icon_jsx: <QueueRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <MOVIE_WATCHLIST___COMPONENT />
        },

        {
            tab_name_jsx: <Typography variant='caption'> Favorite </Typography>,
            tab_icon_jsx: <FavoriteRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <MOVIE_FAVORITE___COMPONENT />
        },

        {
            tab_name_jsx: <Typography variant='caption'> Watched </Typography>,
            tab_icon_jsx: <DoneAllRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <MOVIE_WATCHED___COMPONENT />
        },

    ]

    return(

        <>

           <MOVIE_NAVIGATION_TABS___REUSABLE/>

            <TABS___REUSABLE

                tabs={tabs}

                variation={{
                    mobile: {
                        tab_style: 'default',
                        tab_position: 'top',
                        tab_icon_position: 'top'
                    },

                    desktop: {
                        tab_style: 'default',
                        tab_position: 'top',
                        tab_icon_position: 'top'
                    }
                }}
            />

        </>
    )
}

