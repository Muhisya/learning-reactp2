import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
// bisa di rename pake "as" seperti {as Feet}
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  )
}

export default App;