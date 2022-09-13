import { useParams } from "react-router-dom";

import { useMovieDetailsQuery } from "redux-toolkit/api/movie-api";


import { Box } from "@mui/material";

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/ui";

import DISPLAYING_MOVIE_DETAILS from "./child-1/displaying-movie-details";




export default function MOVIE_DETAILS() {


  const { id } = useParams()

  const { data, error, isLoading, isSuccess } = useMovieDetailsQuery(id)



  return (


    <Box>

      {

        /* Immediately invoked anonymous function */
        (() => {


          if (isLoading) {
            return (
              <LOADING_SPINNER />
            )
          }


          else if (error) {

            return (

              <ERROR_TEXT text='Something is wrong.' />
            )
          }


          else if (isSuccess) {

            return (

              <DISPLAYING_MOVIE_DETAILS data={data} />


            )
          }



        })() /* End: Immediately invoked anonymous function */


      }

    </Box>


  )

}