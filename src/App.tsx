import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
