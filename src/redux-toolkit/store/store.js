import { configureStore } from '@reduxjs/toolkit'


// MovieSearch
import { MovieSearchApi } from 'redux-toolkit/api/movie-search-api'



export const store = configureStore({

  reducer: {
    [MovieSearchApi.reducerPath]: MovieSearchApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieSearchApi.middleware)


})

