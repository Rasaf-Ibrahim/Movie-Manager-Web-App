import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const FavoriteApi = createApi({

    reducerPath: "FavoriteApi",

    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_HOST}/api` }),

    endpoints: (builder) => ({


        fetchFavorites: builder.query({

            query: () => "/favorites"

        }),



        searchFavorite: builder.query({

            query: (id) => `/favorites/${id}`

        }),



        addFavorite: builder.mutation({

            query: (favoriteItems) => ({

                url: "/favorites",
                method: "POST",
                body: favoriteItems

            })

        }),



        deleteFavorite: builder.mutation({

            query: (id) => ({

                url: `/favorites/${id}`,
                method: "DELETE"

            })

        })



    })

})



export const { useFetchFavoritesQuery, useSearchFavoriteQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } = FavoriteApi

