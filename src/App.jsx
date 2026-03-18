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
import MediaPage from './pages/MediaPage/MediaPage.jsx'
import TarifPage from './pages/TarifPage/TarifPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import DemoPage from './pages/DemoPage/DemoPage.jsx'
import RgpdPage from './pages/RgpdPage/RgpdPage.jsx'
import MentionPage from './pages/MentionPage/MentionPage.jsx'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="tarif" element={<TarifPage />} />
          <Route path="demander-une-demo" element={<DemoPage />} />
          <Route path="mentions-legales" element={<MentionPage />} />
          <Route path="rgpd" element={<RgpdPage />} />
          <Route path="solution/a-propos-de-realtimes" element={<AboutPage />} />
          <Route path="solution/logiciel-trs" element={<LogicielPage />} />
          <Route path="solution/votre-projet-mes" element={<ProjetPage />} />
          <Route path="ressources/ebook" element={<EbookPage />} />
          <Route path="ressources/media" element={<MediaPage />} />
          <Route path="clients/temoignages" element={<TestimonialPage />} />
          <Route path="clients/cas-clients" element={<CasPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
