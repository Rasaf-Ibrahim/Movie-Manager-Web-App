import { configureStore } from '@reduxjs/toolkit'


// MovieSearch
import { MovieSearchApi } from 'redux-toolkit/api/movie-api'
import { FavoriteApi } from 'redux-toolkit/api/favorite-api'


export const store = configureStore({

  reducer: {
    [MovieSearchApi.reducerPath]: MovieSearchApi.reducer,

    [FavoriteApi.reducerPath]: FavoriteApi.reducer
  },


  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(MovieSearchApi.middleware).concat(FavoriteApi.middleware)


})

