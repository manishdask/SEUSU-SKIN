import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header     from './components/Header'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import Story      from './pages/Story'
import Science    from './pages/Science'
import Products   from './pages/Products'
import Packaging  from './pages/Packaging'
import Philosophy from './pages/Philosophy'
import Contact    from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"           element={<Home />}       />
            <Route path="/story"      element={<Story />}      />
            <Route path="/science"    element={<Science />}    />
            <Route path="/products"   element={<Products />}   />
            <Route path="/packaging"  element={<Packaging />}  />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/contact"    element={<Contact />}    />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}