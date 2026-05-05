import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Footer from './components/Footer'

// 🚨 CRITICAL: Without this line, Bootstrap CSS won't load and it will look broken!
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css' 

function App() {
  // Your awesome Go Backend connection logic!
  const [serverMessage, setServerMessage] = useState<string>("Connecting to Go API engine...")

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await fetch(`${apiUrl}/api/health`)
        const data = await response.json()
        setServerMessage(data.message)
      } catch (error) {
        setServerMessage(`Failed to connect to the server! Please check the Go server`)
      }
    }
    checkConnection()
  }, [])

  return (
    // BrowserRouter is required so our <Link> buttons actually work
    <BrowserRouter>
      
      <Header />

      <Routes>
        {/* The Main Home Page Route */}
        <Route path="/" element={
          <>
            {/* Later, we will drop the <Navbar /> right above this! */}
            <HeroSection />
            {/* Later, we will drop the <Footer /> right below this! */}
          </>
        } />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App