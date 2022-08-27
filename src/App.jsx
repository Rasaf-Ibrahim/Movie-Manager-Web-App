// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LANDING_PAGE from "pages/landing-page"
import NOT_FOUND_PAGE from 'pages/not-found-page'
import MOVIE_SEARCH_PAGE from 'pages/movie-search-page'


// functional component
export default function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          {/* Landing Page */}
          <Route path='/' element={<LANDING_PAGE />} />


          {/* Movie Search Page */}
          <Route path='/search-movie' element={<MOVIE_SEARCH_PAGE />} />


          {/* 404 Error Page */}
          <Route path="*" element={<NOT_FOUND_PAGE />} />

        </Routes>

      </BrowserRouter>

    </>

  )

}

