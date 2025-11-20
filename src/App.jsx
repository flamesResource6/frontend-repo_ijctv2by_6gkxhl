import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Admissions from './components/Admissions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Programs />
      <Admissions />
      <Footer />
    </div>
  )
}

export default App