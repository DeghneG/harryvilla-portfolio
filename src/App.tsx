import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Technologies } from './components/Technologies'
import { Credentials } from './components/Credentials'
import { Philosophy } from './components/Philosophy'
import { Contact } from './components/Contact'
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
      <Credentials />
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
      <Contact />
    </>
  )
}
