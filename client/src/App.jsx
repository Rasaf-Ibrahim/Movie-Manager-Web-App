// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LANDING_PAGE from "pages/landing-page"
import NOT_FOUND_PAGE from 'pages/not-found-page'
import MOVIE_INFO_PAGES from 'pages/movie-info-pages'
import FAVORITE_PAGE from 'pages/favorite-page'


// functional component
export default function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          {/* Landing Page */}
          <Route path='/' element={<LANDING_PAGE />} />



          {/* Movie Info Pages */}
          <Route path='/movie/:id' element={<MOVIE_INFO_PAGES />} />

          {/* Favorite Page */}
          <Route path='/movie' element={<FAVORITE_PAGE />} />


          {/* 404 Error Page */}
          <Route path="*" element={<NOT_FOUND_PAGE />} />

        </Routes>

      </BrowserRouter>

    </>

  )

}

