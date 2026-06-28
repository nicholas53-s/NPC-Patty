import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Block the right-click / long-press "Save image" menu on images and the
  // image-bearing sections (hero background, menu cards, gallery tiles).
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      if (t.tagName === 'IMG' || t.closest('.hero, .menu-card, .tile')) {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', blockContextMenu)
    return () => document.removeEventListener('contextmenu', blockContextMenu)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
