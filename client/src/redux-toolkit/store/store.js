import { configureStore } from '@reduxjs/toolkit'



import { MovieApi } from 'redux-toolkit/api/movie-api'
import { FavoriteApi } from 'redux-toolkit/api/favorite-api'
import {WatchLaterApi} from 'redux-toolkit/api/watch-later-api'

export const store = configureStore({

  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,

    [FavoriteApi.reducerPath]: FavoriteApi.reducer,

    [WatchLaterApi.reducerPath]: WatchLaterApi.reducer
  },


  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(MovieApi.middleware).concat(FavoriteApi.middleware).concat(WatchLaterApi.middleware)

})

