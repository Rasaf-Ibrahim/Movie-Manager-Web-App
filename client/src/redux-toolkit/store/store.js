import { configureStore } from '@reduxjs/toolkit'


// SEARCH_MOVIE
import { MovieApi } from 'redux-toolkit/api/movie-api'
import { FavoriteApi } from 'redux-toolkit/api/favorite-api'


export const store = configureStore({

  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,

    [FavoriteApi.reducerPath]: FavoriteApi.reducer
  },


  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(MovieApi.middleware).concat(FavoriteApi.middleware)


})

