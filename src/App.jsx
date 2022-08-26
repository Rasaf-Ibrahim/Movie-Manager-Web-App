// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LandingPage from "pages/landing-page"
import NotFoundPage from 'pages/not-found-page'
import MovieSearchPage from 'pages/movie-search-page'

export default function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<LandingPage />} />


          {/* Movie Search */}
          <Route path='/search-movie' element={<MovieSearchPage/>}  />


          {/* 404 Error Page */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </BrowserRouter>

    </>

  )

}

