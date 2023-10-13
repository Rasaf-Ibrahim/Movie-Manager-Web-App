/*__________________________________________

 ✅ import
____________________________________________*/

// react
import React from 'react'

// hook
import { useState } from "react"

// icons
import DateRangeIcon from '@mui/icons-material/DateRange'
import LanguageIcon from '@mui/icons-material/Language'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'


// components
import { Box, Button, Typography } from "@mui/material"
import MODAL_OF_DETAILS_INFO___COMPONENT from '../details-info-modal/details-info-modal'


/*__________________________________________

 ✅ Functional Component
____________________________________________*/

export default function MOVIE_CARD___REUSABLE({ data, content_type}) {

    // open details info modal state
    const [open_details_info_modal_state, set_open_details_info_modal_state] = useState(null)

    const handle_click_on_more_info_button = (content_id) => {
        set_open_details_info_modal_state(content_id)
    }

    const handle_close_of_details_info_modal = () => {
        set_open_details_info_modal_state(null)
    }

  
    // TSX
    return (


        <WRAPPER_OF_JSX___STYLED>


            <WRAPPER_OF_ALL_CARDS___STYLED>


                {/*  Note: mapping all result here */}
                {data.map((movie) => (

                  
                    <>

                    <WRAPPER_OF_A_CARD___STYLED key={movie.id}>

                        <WRAPPER_OF_CARD_IMAGE___STYLED>

                            {
                                /* Note: Some movie's poster is missing */
                                movie.poster_url.includes('null') ?


                                    <CARD_IMAGE___STYLED 
                                        src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster" 
                                        
                                        alt={movie.title} />

                                    :

                                    <CARD_IMAGE___STYLED 
                                        src={movie.poster_url}

                                        alt={movie.title} 
                                     />
                            }


                        </WRAPPER_OF_CARD_IMAGE___STYLED> 



                        <ALL_CONTENT_OF_CARD_EXCEPT_IMAGE___STYLED>

                            <MOVIE_TITLE___STYLED>

                                {movie.title}

                            </MOVIE_TITLE___STYLED>


                            <WRAPPER_OF_MOVIE_INFO___STYLED>

                                <ONE_INFO_OF_MOVIE___CHILD 
                                    Icon={DateRangeIcon} 
                                    value={movie.year || movie.first_aired} 
                                />

                                <ONE_INFO_OF_MOVIE___CHILD
                                    Icon={LanguageIcon} 
                                    value={movie.language} 
                                 />

                                <ONE_INFO_OF_MOVIE___CHILD 
                                    Icon={ThumbUpAltIcon} 
                                    value={movie.viewer_approval} 
                                />
                            </WRAPPER_OF_MOVIE_INFO___STYLED>


                            <Box>

                                <Box onClick={() => handle_click_on_more_info_button(movie.id)}>

                                    <Button size="small" color="primary" variant='outlined'>
                                        More Info
                                    </Button>

                                </Box>

                                <MODAL_OF_DETAILS_INFO___COMPONENT
                                    open_details_info_modal={open_details_info_modal_state === movie.id}
                                    handle_close_of_details_info_modal={handle_close_of_details_info_modal}
                                    content_id={movie.id}
                                    content_type={content_type}
                                />

                            </Box>

                        </ALL_CONTENT_OF_CARD_EXCEPT_IMAGE___STYLED> 


                    </WRAPPER_OF_A_CARD___STYLED>



                    </>

                ))}

            </WRAPPER_OF_ALL_CARDS___STYLED> 


        

        </WRAPPER_OF_JSX___STYLED> 
    )
}



/*__________________________________________

 ✅ Child Components
____________________________________________*/

// 🍪
function ONE_INFO_OF_MOVIE___CHILD({ Icon, value }) {
    
    return (
        <Box sx={{ 
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem'
        }}>
            {<Icon sx={{color:'primary.light', fontSize:'1.2rem'}} />}

            <Typography variant="caption" fontWeight="bold">
                {value}
            </Typography>

        </Box>
    )
}







/*__________________________________________

 ✅ Styled Components of 
 <MOVIE_CARD___REUSABLE/>
____________________________________________*/


function WRAPPER_OF_JSX___STYLED({children}) {

    return (

        <Box sx={{
            // margin top is bigger than usual because card image is positioned absolute and it has minus value for 'top' property.
            marginTop: '5.5rem',

            // centering all the content of the component
            display: 'grid',
            justifyItems: 'center'
        }}>
          
          {children}

        </Box>
    )
}



function WRAPPER_OF_ALL_CARDS___STYLED({children}) {

    return (

        <Box sx={{
            /* structuring all the cards with grid*/
            display: 'grid',

            /* mobile will have one card in a row, tablet will have 2, laptop will have 3, desktop will have 4. */
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },

            /* By default, value of alignItems is 'stretch' and that makes all the cards' size to be same. But there is a problem with making all the cards's size to be same. There are some cards which have less content but they get stretched to have the same size as another more contented card. In this way, we get empty space on that less contented stretched card and it doesn't look good. To avoid this situation, changing alignItems to 'start' */
            alignItems: 'start',

            /* rowGap is bigger than usual because card image is positioned absolute and it has minus value for 'top' property. */
            rowGap: '5.5rem',
            columnGap: '2.2rem'
        }}>
          
          {children}

        </Box>
    )
}



function WRAPPER_OF_A_CARD___STYLED({children, ...props}) {

    return (

        <Box 
            sx={{

                width: '17rem',
             
                
                boxShadow: `0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.20)`,

    
                borderRadius: '0.3rem',

                /* here, position is relative because we want the 'card_image_wrapper_css' position to be absolute */
                position: 'relative',
            }}

            {...props}
        
        >


            {children}

        </Box>
    )
} 


function WRAPPER_OF_CARD_IMAGE___STYLED({children}) {

    return (
        <Box sx={{
            position: 'absolute',
            width: '80%',
            top: '-3rem',
        
            //positioning this section to the horizontal center of its parent 
            left: '50%',
            transform: 'translateX(-50%)'
        }}>
    
             {children}
        </Box>
    )
 
}


function CARD_IMAGE___STYLED({...props}) {

    return (

        <Box 
            sx={{
                objectFit: 'cover',
                height: '18rem',
                width: '100%',  /* 100% of the parent */

                borderRadius: '0.3rem'
            }}
            component='img'

            {...props}
        />

          
    )
}


function ALL_CONTENT_OF_CARD_EXCEPT_IMAGE___STYLED({children}) {

    return (

        <Box sx={{
            // margin top is way larger than usual because card image is positioned absolute and the rest of content must be placed after the image.
            marginTop: '15rem',

            padding: '1.1rem',

            // centering all the child component and providing gap between them 
            display: 'grid',
            justifyItems: 'center',
            gap: '1.6rem',

            textAlign: 'center',
        }}>

           {children}

        </Box>
    )
}


function MOVIE_TITLE___STYLED ({children}) {

    return (

        <Typography variant="h6" sx={{fontWeight: '600'}}>
            {children}
        </Typography>
    )
}


function WRAPPER_OF_MOVIE_INFO___STYLED({ children }) {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            boxShadow: `0 0 3px rgba(0,0,0,0.12), 0 0 3px rgba(0,0,0,0.24)`
        }}>
            {children}
        </Box>
    )
}


