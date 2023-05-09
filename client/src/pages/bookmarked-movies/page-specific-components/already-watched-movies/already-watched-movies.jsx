// hook
import { useState, useEffect } from "react";

// hook
import { useMount, useUpdateEffect } from 'react-use';


// api hook
import {
    fetch_already_watched_movies_hook,
    delete_from_already_watched_hook
} from '@/api/movie/already-watched-movie'

// styled-components
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link'
import { styled } from '@mui/material/styles';
import media_queries from '@/utils/media-queries/media-queries';


// importing zustand store
import { user_store } from "@/store/user-store"

// components
import ERROR_TEXT___COMPONENT from "@/components/reusable/for-any-project/error-text/error-text";
import LOADING_SPINNER___COMPONENT from "@/components/reusable/for-any-project/loading-spinner/loading-spinner";

import { Box, Button, Typography } from '@mui/material';
import { Skeleton } from '@mui/material';



import { useLogger } from "react-use";




/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function ALREADY_WATCHED_MOVIES___COMPONENT() {


    // 🍪 get the user state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))



    // 🍪 fetch all favorite movies 
    const {
        refetch: fetch_all_the_movies, 
        isLoading: movie_is_currently_getting_fetched,
        isSuccess: movie_fetching_is_successful,
        isError: movie_fetching_has_failed,
        data: fetched_movie_data,
    } = fetch_already_watched_movies_hook({user_id: user_info._id})
    

    useMount(()=> {
        fetch_all_the_movies()
    })

    

    useLogger('fetched_movie_data', fetched_movie_data)



/*-------------------------------------------------------------------
     ✅ JSX
----------------------------------------------------------------------*/
    return (

        <>
            {

                /* Immediately invoked anonymous function */
                (() => {

                    if (movie_is_currently_getting_fetched) {
                        return (

                            <LOADING_SPINNER___COMPONENT fullPage={true} margin='0rem' />
                        )
                    }


                    else if (movie_fetching_has_failed) {
                        return (

                            <ERROR_TEXT___COMPONENT text='Something is wrong.' />
                        )
                    }


                    else if (movie_fetching_is_successful) {

                        return (

                            <CARD___COMPONENT data={fetched_movie_data.fetched_documents}  user_info={user_info} fetch_all_the_movies={fetch_all_the_movies}/>
                            
                        )
                    }


                })()  /* End: Immediately invoked anonymous function */

            }

        </>

    )
}






// ✅
function CARD___COMPONENT({ data, user_info, fetch_all_the_movies}) {




    // 🍪 delete a movie from the favorite list and update bookmark state

    const {
        mutate: delete_movie,
        isSuccess: movie_is_deleted,
        isError: movie_is_not_deleted
    } = delete_from_already_watched_hook()


    const handle_delete_movie = (imdb_id) => {

         delete_movie({user_id: user_info._id, imdb_id: imdb_id})

    }


    useUpdateEffect(()=> {

        if(movie_is_deleted) {
           fetch_all_the_movies()
        }

    },[movie_is_deleted])





    return (

        <WRAPPER_OF_ALL_CARD___STYLED>

            {data.length === 0 &&

                <Typography variant='body1' color='error.main' sx={{marginTop:'1rem'}}>There is no movie in this list!</Typography>

            }

            {data.length !== 0 && data.map((data_one_card) =>

                <CARD___STYLED key={data_one_card.imdbID}>

                    <CARD_IMAGE_WRAPPER___STYLED>

                        <CARD_IMAGE___COMPONENT data={data_one_card} />

                    </CARD_IMAGE_WRAPPER___STYLED>



                    <CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED>

                        <CARD_TITLE___STYLED>
                            {data_one_card.Title}
                        </CARD_TITLE___STYLED>

                        <CARD_SUBTITLE_TEXT_WRAPPER___STYLED>

                            <CARD_SUBTITLE___STYLED>
                            Type: {data_one_card.Type.charAt(0).toUpperCase() + data_one_card.Type.slice(1)}
                            </CARD_SUBTITLE___STYLED>

                            <CARD_SUBTITLE___STYLED>
                            Year: {data_one_card.Year}
                            </CARD_SUBTITLE___STYLED>

                        </CARD_SUBTITLE_TEXT_WRAPPER___STYLED>


                        <WRAPPER_OF_CARD_BUTTON___STYLED>

                            <ROUTER_LINK___STYLED to={`/movie-details/${data_one_card.imdbID}`} >

                                <CARD_BUTTON___STYLED>
                                    Movie Details
                                </CARD_BUTTON___STYLED>

                            </ROUTER_LINK___STYLED>

                                <CARD_BUTTON___STYLED onClick={()=> handle_delete_movie(data_one_card.imdbID)}>
                                     Remove
                                </CARD_BUTTON___STYLED>


                        </WRAPPER_OF_CARD_BUTTON___STYLED>



                    </CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED>



                </CARD___STYLED>

            )}

        </WRAPPER_OF_ALL_CARD___STYLED>


    )
}








/*-------------------------------------------------------------------
 ✅ Styled Components for  <CARD___COMPONENT/>
----------------------------------------------------------------------*/


/* 🍔 */
const WRAPPER_OF_ALL_CARD___STYLED = styled('div')(

    ({ theme }) => `

          margin:1rem;
          margin-top: 2rem;
        
          display:flex;
          flex-wrap:wrap;
          gap:1rem;
          justify-content:center;
    `
)



/* 🍔 */
const CARD___STYLED = styled((props) =>

    <Box {...props}
        //box-shadow 
        sx={{ boxShadow: 1 }} />

)(({ theme }) => `

      ${/* width, 17rem in the phone, 34rem on other devices */''}
      ${media_queries.name_xs_sm('width', '17rem', '34rem')};

      
      padding:1rem;

      ${/*padding-top */ ''}
      ${media_queries.name_xs_sm('padding-top', '0.5rem', '1rem')};
      
    

      ${/* no background-color in the light mode   */ ''}
      background-color: ${theme.palette.mode === 'dark' ? theme.palette.background.variation_1 : 'inherit'};

      ${/* no border in the dark mode */ ''}
      border: ${theme.palette.mode === 'dark' ? 'none' : `1px solid ${theme.palette.divider}`};


      border-radius:0.5rem;


      display:grid;

      align-items: center;
      
      ${/* gap */ ''}
      ${media_queries.name_xs_sm('gap', '1rem', '2rem')};


      
      ${/*grid-template-areas*/ ''}
      ${media_queries.name_xs_sm('grid-template-areas',

    /*In the xs, there will be 2 rows & 1 column. On the 1st row, card_image_wrapper. On the 2nd row,card_all_content_except_image.   */
    ` 'card_image_wrapper' 
          'card_all_content_except_image' `,

    /*From the sm, there will be 1 row & 3 columns. On the 1st and 2nd column, card_all_content_except_image. On the 3rd column card_image_wrapper.  */

    ` 'card_all_content_except_image card_all_content_except_image  card_image_wrapper' 
          `
)};


  `)



/* 🍔 */
const CARD_IMAGE_WRAPPER___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

      grid-area: card_image_wrapper;

      display:flex;
      justify-content:center;
  `)




/* 🍔 */
const CARD_ALL_CONTENT_EXCEPT_IMAGE___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `
    
    grid-area: card_all_content_except_image;

      display: flex;
      flex-direction:column;
      justify-items: center;
      gap: 1.5rem;
  `)



/* 🍔 */
const CARD_TITLE___STYLED = styled((props) =>

    <Typography {...props} variant='h6' />

)(({ theme }) => `

      ${/*text-align */''}
      ${media_queries.name_xs_sm('text-align', 'center', 'left')};
      
  `)


const CARD_SUBTITLE_TEXT_WRAPPER___STYLED = styled((props) =>

<Box {...props}  />

)(({ theme }) => `

  ${/*text-align */''}
  ${media_queries.name_xs_sm('text-align', 'center', 'left')};

`)



/* 🍔 */
const CARD_SUBTITLE___STYLED = styled((props) =>

    <Typography {...props} variant='body2' />

)(({ theme }) => ``)



/* 🍔  */
const WRAPPER_OF_CARD_BUTTON___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    display:flex;

    ${/*justify-content */''}
    ${media_queries.name_xs_sm('justify-content', 'center', 'flex-start')};


    gap:1.5rem;
  `)



/* 🍔 */
const CARD_BUTTON___STYLED = styled((props) =>

    <Button {...props} variant='outlined' size='small' />

)(({ theme }) => `

    
  `)











function CARD_IMAGE___COMPONENT({ data }) {

    const [isImageLoading, setIsImageLoading] = useState(true)


    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <>

            {(() => {



                  if(data.Poster === 'N/A') {
                        return (

                            <CARD_IMAGE___STYLED
                            src="https://via.placeholder.com/750x750.png?text=Sorry,+No+Poster"/>

                        )

                   } 
                   else{

                    return (
                            
                        <>
            
                            {isImageLoading &&
        
                                <CARD_IMAGE_SKELETON___STYLED />
        
                            }
        
        
                            {/* 💡 The following styled-component has been created from a html img tag. */}
                            <CARD_IMAGE___STYLED
                                style={{ display: isImageLoading ? 'none' : 'block' }}
                                src={data.Poster}
                                onLoad={() => setIsImageLoading(false)} 
                            />
    
                    
                        </> 


                    
                    )
                   } 


              })()}  

      

        </>

    )
}





/*-------------------------------------------------------------------
 ✅ Styled Components for <CARD_IMAGE___COMPONENT/>
----------------------------------------------------------------------*/

/* 🍔 */
const CARD_IMAGE___STYLED = styled('img')

    (({ theme }) => `
        
        
            ${/*  
                🍗 Here, I shouldn't use width more than 15rem because the card width is 17rem and we want some space around the image.
        
                🍗 width 15rem & height 10rem will create aspect ratio of 3:2. On the other hand, width 10rem & height 8rem also creates aspect ratio of 5:4
            */ ''}
        
            ${/*width */''}
            ${media_queries.name_xs_sm('width', '15rem', '12rem')};
            
            ${/*height */''}
            ${media_queries.name_xs_sm('height', '10rem', '8rem')};
        
            
            object-fit: cover;
        
            border-radius:1rem;
    `)



/* 🍔 */
const CARD_IMAGE_SKELETON___STYLED = styled((props) =>

    <Skeleton {...props} />

)(({ theme }) => `

        ${/*width */''}
        ${media_queries.name_xs_sm('width', '15rem', '12rem')};

        ${/*height */''}
        ${media_queries.name_xs_sm('height', '10rem', '8rem')};



        border-radius:1rem;
   `)