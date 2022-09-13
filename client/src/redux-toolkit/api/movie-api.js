import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const MovieApi = createApi({

    reducerPath: "MovieApi",

    baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),

    endpoints: (builder) => ({

        searchMovie: builder.query({
            query: (movieName) => `/?s=${movieName}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

        }),

        movieDetails: builder.query({
            query: (imdbID) => `/?i=${imdbID}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

        }),
    })

})


export const { useSearchMovieQuery, useMovieDetailsQuery } = MovieApi

