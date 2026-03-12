import React from 'react'
import ClientsSlider from '../components/ClientsSection/ClientsSlider/ClientsSlider'
import { clientLogos } from '../data/clientsLogos'


export default function AboutPage() {
  return (
    <section>
        <ClientsSlider logos={clientLogos} />
    </section>
  )
}