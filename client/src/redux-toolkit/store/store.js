import { configureStore } from '@reduxjs/toolkit'


// MovieSearch
import { MovieSearchApi } from 'redux-toolkit/api/movie-api'
import {BookmarkApi} from 'redux-toolkit/api/bookmark-api'


export const store = configureStore({

  reducer: {
    [MovieSearchApi.reducerPath]: MovieSearchApi.reducer,

    [BookmarkApi.reducerPath]: BookmarkApi.reducer
  },


  middleware: (getDefaultMiddleware) =>
    
    getDefaultMiddleware().concat(MovieSearchApi.middleware).concat(BookmarkApi.middleware)


})

