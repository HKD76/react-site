import { Link, useLocation } from 'react-router-dom'

const PAGE_CONTENT = {
  contact: {
    title: 'Contact',
    h1: 'Contactez un Ingénieur en Lean Management',
    text: 'Contactez un ingénieur Lean RealTIMES aujourd\'hui si vous avez des questions sur l\'intégration de notre système de suivi de performance.',
    cta: 'Nous contacter',
    ctaLink: '/contact',
  },
  tarif: {
    title: 'Tarif',
    h1: 'Nos offres RealTiMES',
    text: 'Découvrez nos tarifs et choisissez l\'offre adaptée à votre production industrielle.',
    cta: 'Voir les tarifs',
    ctaLink: '/tarif',
  },
  'demander-une-demo': {
    title: 'Demander une démo',
    h1: 'Demandez une démo RealTiMES',
    text: 'Découvrez notre logiciel de suivi de production en temps réel avec une démonstration personnalisée.',
    cta: 'Demander une démo',
    ctaLink: '/demander-une-demo',
  },
  'mentions-legales': {
    title: 'Mentions légales',
    h1: 'Mentions légales',
    text: 'Informations légales et conditions d\'utilisation du site RealTiMES.',
    cta: 'Retour à l\'accueil',
    ctaLink: '/',
  },
  rgpd: {
    title: 'RGPD',
    h1: 'Politique de confidentialité',
    text: 'Protection des données personnelles et conformité RGPD.',
    cta: 'Retour à l\'accueil',
    ctaLink: '/',
  },
  'solution/a-propos-de-realtimes': {
    title: 'À propos de RealTiMES',
    h1: 'À propos de RealTiMES',
    text: 'Expert du suivi de production et de la performance industrielle.',
    cta: 'En savoir plus',
    ctaLink: '/solution/logiciel-trs',
  },
  'solution/logiciel-trs': {
    title: 'La Solution RealTiMES',
    h1: 'Logiciel TRS/MES',
    text: 'Solution complète de suivi de production industrielle en temps réel.',
    cta: 'Découvrir',
    ctaLink: '/solution/votre-projet-mes',
  },
  'solution/votre-projet-mes': {
    title: 'Votre projet MES',
    h1: 'Construire votre projet MES',
    text: 'Accompagnement pour la mise en place de votre système MES.',
    cta: 'Demander une démo',
    ctaLink: '/demander-une-demo',
  },
  'ressources/blog': {
    title: 'Blog RealTiMES',
    h1: 'Blog',
    text: 'Actualités et articles sur le suivi de production industrielle.',
    cta: 'Voir le blog',
    ctaLink: '/ressources/blog',
  },
  'ressources/ebook': {
    title: 'e-Book',
    h1: 'e-Book',
    text: 'Téléchargez nos e-books sur la performance industrielle.',
    cta: 'Télécharger',
    ctaLink: '/ressources/ebook',
  },
  'ressources/media': {
    title: 'Média',
    h1: 'Média',
    text: 'Vidéos et ressources médias RealTiMES.',
    cta: 'Voir',
    ctaLink: '/ressources/media',
  },
  'clients/temoignages': {
    title: 'Témoignages',
    h1: 'Témoignages clients',
    text: 'Ce que nos clients disent de RealTiMES.',
    cta: 'Voir les témoignages',
    ctaLink: '/clients/temoignages',
  },
  'clients/cas-clients': {
    title: 'Cas clients',
    h1: 'Cas clients',
    text: 'Découvrez comment nos clients améliorent leur production.',
    cta: 'Voir les cas',
    ctaLink: '/clients/cas-clients',
  },
}

export default function PlaceholderPage() {
  const location = useLocation()
  const key = location.pathname.replace(/^\//, '') || 'contact'
  const content = PAGE_CONTENT[key] || {
    title: 'Page',
    h1: path || 'Page',
    text: 'Contenu de la page en cours de migration.',
    cta: 'Retour',
    ctaLink: '/',
  }

  return (
    <section className="section-header background-color-gray">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="text-align-center">
              <h1 className="heading-style-h2">{content.h1}</h1>
              <p className="text-size-medium-4 margin-top margin-medium">{content.text}</p>
              <div className="margin-top margin-medium">
                <Link to={content.ctaLink} className="button w-button">{content.cta}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
