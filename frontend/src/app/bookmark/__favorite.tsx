/*__________________________________________

 ✅ import 
____________________________________________*/

// hook
import { useState } from "react"

// styled components
import { WRAPPER_OF_JSX___STYLED, WRAPPER_OF_CHIPS___STYLED } from "./___common-styled-components"

// components
import { Chip, Box } from "@mui/material"

import BOOKMARKED_CARDS___COMPONENT from "@/components/reusable/just-for-this-project/movie-manager-app/bookmarked-cards/bookmarked-cards"


/*__________________________________________

 ✅ Functional Component 
____________________________________________*/

export default function WATCHLIST___COMPONENT() {

    // showing state
    const [showing, set_showing] = useState('movie')

    const handle_chip_click = () => {

        if (showing === 'movie') {
            set_showing('series')
        }

        else {
            set_showing('movie')
        }

    }


    // TSX
    return (

        <WRAPPER_OF_JSX___STYLED>

            <WRAPPER_OF_CHIPS___STYLED>

                <Chip
                    label='Movie'
                    onClick={handle_chip_click}
                    variant={showing === 'movie' ? 'filled' : 'outlined'}
                />

                <Chip
                    label='Series'
                    onClick={handle_chip_click}
                    variant={showing === 'series' ? 'filled' : 'outlined'}
                />

            </WRAPPER_OF_CHIPS___STYLED>



            <Box>

                {showing === 'movie' &&

                    <BOOKMARKED_CARDS___COMPONENT
                        bookmark_type='favorite'
                        content_type='movie'
                    />
                }


                {showing === 'series' &&

                    <BOOKMARKED_CARDS___COMPONENT
                        bookmark_type='favorite'
                        content_type='series'
                    />
                }

            </Box>


        </WRAPPER_OF_JSX___STYLED>
    )
}





