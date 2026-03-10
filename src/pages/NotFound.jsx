import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper light-teal">
        <section className="section-header background-color-gray" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="text-align-center">
                  <h1 className="heading-style-h2">404 - Page non trouvée</h1>
                  <p className="text-size-medium-4 margin-top margin-medium">La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
                  <div className="margin-top margin-medium">
                    <Link to="/" className="button w-button">Retour à l&apos;accueil</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
