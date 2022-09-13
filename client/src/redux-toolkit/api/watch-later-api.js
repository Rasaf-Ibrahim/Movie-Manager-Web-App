import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const WatchLaterApi = createApi({

    reducerPath: "WatchLaterApi",

    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_HOST}/api` }),

    endpoints: (builder) => ({


        fetchWatchLater: builder.query({

            query: () => "/watch-later"

        }),



        searchWatchLater: builder.query({

            query: (id) => `/watch-later/${id}`

        }),



        addWatchLater: builder.mutation({

            query: (watchLaterItems) => ({

                url: "/watch-later",
                method: "POST",
                body: watchLaterItems

            })

        }),



        deleteWatchLater: builder.mutation({

            query: (id) => ({

                url: `/watch-later/${id}`,
                method: "DELETE"

            })

        })



    })

})



export const { useFetchWatchLaterQuery, useSearchWatchLaterQuery, useAddWatchLaterMutation, useDeleteWatchLaterMutation } = WatchLaterApi

