import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen max-w-2xl mx-auto px-4 py-6 text-primary">
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
