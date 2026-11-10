import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Technologies } from './components/Technologies'
import { Philosophy } from './components/Philosophy'
import { Footer } from './components/Footer'
import { ScrollManager } from './components/ScrollManager'
import { CategoryPage } from './pages/CategoryPage'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Technologies />
      <Philosophy />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="*" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
