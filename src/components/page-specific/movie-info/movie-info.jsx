import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { useMovieInfoQuery } from "redux-toolkit/api/movie-api";
import { ERROR_TEXT, LOADING_SPINNER } from "components/ui";
import MOVIE_DETAIL from "./child-1/movie-detail";




export default function MOVIE_INFO() {


    const {id} = useParams()

    const { data, error, isLoading, isSuccess }  = useMovieInfoQuery(id)

    console.log(data)
 

   return (

     <Box>


        {

          /* Immediately invoked immediately invoke */
          (() => {


            if (isLoading) {
              return (
                  <LOADING_SPINNER/>
              )
            }


            else if (error) {

              return (

                    <ERROR_TEXT text='Something is wrong.' />
              )
            }


            else if (isSuccess) {

              return (

                  <MOVIE_DETAIL data={data}/>
                
                
              )
            }


          
          })() /* End: Immediately invoked immediately invoke */

        
        }
        
     </Box>


   )

}