import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<PlaceholderPage />} />
          <Route path="tarif" element={<PlaceholderPage />} />
          <Route path="demander-une-demo" element={<PlaceholderPage />} />
          <Route path="mentions-legales" element={<PlaceholderPage />} />
          <Route path="rgpd" element={<PlaceholderPage />} />
          <Route path="solution/a-propos-de-realtimes" element={<AboutPage />} />
          <Route path="solution/logiciel-trs" element={<PlaceholderPage />} />
          <Route path="solution/votre-projet-mes" element={<PlaceholderPage />} />
          <Route path="ressources/blog" element={<PlaceholderPage />} />
          <Route path="ressources/ebook" element={<PlaceholderPage />} />
          <Route path="ressources/media" element={<PlaceholderPage />} />
          <Route path="clients/temoignages" element={<PlaceholderPage />} />
          <Route path="clients/cas-clients" element={<PlaceholderPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
