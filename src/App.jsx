import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import Stories from './components/Stories'
import Insights from './components/Insights'
import ProspectBoard from './components/ProspectBoard'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import Headlines from './components/Headlines'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Ticker />
      <Nav />

      <main id="main">
        <Hero />
        <Stories />
        <Insights />
        <ProspectBoard />
        <Testimonial />
        <Pricing />
        <Headlines />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
