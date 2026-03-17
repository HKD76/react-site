import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage/AboutPage'
import TestimonialPage from './pages/TestimonialPage/TestimonialPage'
import LogicielPage from './pages/LogicielPage/LogicielPage'
import ProjetPage from './pages/ProjetPage/ProjetPage'
import EbookPage from './pages/EbookPage/EbookPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'
import CasPage from './pages/CasPage/CasPage.jsx'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<PlaceholderPage />} />
          <Route path="tarif" element={<PlaceholderPage />} />
          <Route path="demander-une-demo" element={<PlaceholderPage />} />
          <Route path="mentions-legales" element={<PlaceholderPage />} />
          <Route path="rgpd" element={<PlaceholderPage />} />
          <Route path="solution/a-propos-de-realtimes" element={<AboutPage />} />
          <Route path="solution/logiciel-trs" element={<LogicielPage />} />
          <Route path="solution/votre-projet-mes" element={<ProjetPage />} />
          <Route path="ressources/blog" element={<PlaceholderPage />} />
          <Route path="ressources/ebook" element={<EbookPage />} />
          <Route path="ressources/media" element={<PlaceholderPage />} />
          <Route path="clients/temoignages" element={<TestimonialPage />} />
          <Route path="clients/cas-clients" element={<CasPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
