import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const MovieSearchApi = createApi({

    reducerPath: "MovieSearchApi",

    baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com/" }),

    endpoints: (builder) => ({

        MovieSearch: builder.query({
            query: (movieName) => `/?s=${movieName}&apikey=1350c188`

        }),
    })

})


export const { useMovieSearchQuery } = MovieSearchApi

