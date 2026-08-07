import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Content from './components/Content'

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Categories />
      <Content />
    </main>
  )
}