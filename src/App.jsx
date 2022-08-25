// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import LandingPage from "pages/landing-page"
import NotFoundPage from 'pages/not-found-page'


export default function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          {/* Landing Page */}
          <Route path='/' element={<LandingPage />} />

          {/* 404 Error Page */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </BrowserRouter>

    </>

  )

}

