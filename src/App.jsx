import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Disciplines from './components/Disciplines'
import Gallery from './components/Gallery'
import VideoGallery from './components/VideoGallery'
import Voice from './components/Voice'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  // Reveal animations for everything outside the gallery (which manages its own).
  useReveal([])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Gallery />
        <VideoGallery />
        <Voice />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
