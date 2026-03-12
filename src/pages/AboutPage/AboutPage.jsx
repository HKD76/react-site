import ClientsSlider from '../../components/ClientsSlider/ClientsSlider'
import StatsSection from '../../components/StatsSection/StatsSection'
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection'
import { clientLogos } from '../../data/clientsLogos'


export default function AboutPage() {
  return (
    <section>
        <ClientsSlider logos={clientLogos} />
        <StatsSection />
        <CallToActionSection />
    </section>
  )
}