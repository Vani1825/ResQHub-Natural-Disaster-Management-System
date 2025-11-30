import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Flood from './pages/Flood'
import Earthquake from './pages/Earthquake'
import Fire from './pages/Fire'
import Landslide from './pages/Landslide'
import EmergencyKit from './pages/EmergencyKit'
import Donation from './pages/Donation'
import Resources from './pages/Resources'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flood" element={<Flood />} />
          <Route path="/earthquake" element={<Earthquake />} />
          <Route path="/fire" element={<Fire />} />
          <Route path="/landslide" element={<Landslide />} />
          <Route path="/kits" element={<EmergencyKit />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
