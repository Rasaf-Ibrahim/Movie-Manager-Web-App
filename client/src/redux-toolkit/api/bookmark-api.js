import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const BookmarkApi = createApi({

    reducerPath: "BookmarkApi",

    baseQuery: fetchBaseQuery({ baseUrl: "http://65.0.109.170:3002/api/" }),

    endpoints: (builder) => ({


        fetchBookmarks: builder.query({

            query: () => "/bookmarks"

        }),


        
        fetchBookmark:  builder.query({

            query: (id)=> `/bookmarks/${id}`
        
        }),



        addBookmark: builder.mutation({

            query: (bookmarkItems) => ({

              url: "/bookmarks",
              method: "POST",
              body: bookmarkItems

            })

          }),



        updateBookmark: builder.mutation({

            query: ({ id, ...bookmarkItems }) => ({

                url: `/bookmarks/${id}`,
                method: "PATCH",
                body: bookmarkItems

            })

        }),



        deleteBookmark: builder.mutation({

            query: (id) => ({

                url: `/bookmarks/${id}`,
                method: "DELETE"

            })

        })
        

      
    })

})



export const { useFetchBookmarksQuery, useFetchBookmarkQuery, useAddBookmarkMutation, useUpdateBookmarkMutation, useDeleteBookmarkMutation} = BookmarkApi

