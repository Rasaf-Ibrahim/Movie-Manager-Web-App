// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LANDING_PAGE from "pages/landing-page"
import NOT_FOUND_PAGE from 'pages/not-found-page'
import MOVIE_DETAILS_PAGES from 'pages/movie-details-pages'
import MOVIE_PAGE from 'pages/movie-page'


// functional component
export default function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          {/* Landing Page */}
          <Route path='/' element={<LANDING_PAGE />} />


          {/* Favorite Page */}
          <Route path='/movie' element={<MOVIE_PAGE />} />


          {/* Movie Details Pages */}
          <Route path='/movie/:id' element={<MOVIE_DETAILS_PAGES />} />

          {/* 404 Error Page */}
          <Route path="*" element={<NOT_FOUND_PAGE />} />


        </Routes>

      </BrowserRouter>

    </>

  )

}

