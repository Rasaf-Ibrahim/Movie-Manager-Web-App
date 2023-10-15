'use client'


import MOVIE_NAVIGATION_TABS___REUSABLE from "@/components/reusable/just-for-this-project/movie-manager-app/movie-navigation-tabs/movie-navigation-tabs";

// icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'

// components
import { Box, Divider, Typography } from "@mui/material"

import TABS___REUSABLE, { type_of_tabs } from '@/components/reusable/for-any-project/tabs/tabs'

import SEARCH___COMPONENT from "./__search"
import TOP_RATED___COMPONENT from "./__top-rated"
import TRENDING___COMPONENT from "./__trending"




export default function SERIES___COMPONENT() {


      // 🍪 all tabs
      const tabs: type_of_tabs = [

        {
            tab_name_jsx: <Typography variant='caption'> Search </Typography>,
            tab_icon_jsx: <SearchRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <SEARCH___COMPONENT />
        },

        {
            tab_name_jsx: <Typography variant='caption'> Trending </Typography>,
            tab_icon_jsx: <TrendingUpRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <TRENDING___COMPONENT />
        },

        {
            tab_name_jsx: <Typography variant='caption'> Top Rated </Typography>,
            tab_icon_jsx: <StarRateRoundedIcon sx={{ fontSize: '1.3rem' }} />,
            component_jsx: <TOP_RATED___COMPONENT />
        },



    ]


    return (
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