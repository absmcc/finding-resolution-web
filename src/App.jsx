import ".App.css"
import { initializeApp } from "firbase-admin/app"
import React, { useState, useEffect, createContext } from "react"
import { BrowseRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./regular/Navbar"
import Footer from "./regular/Footer"
import Login from "./components/Login"
import Signup from "./components/Home"
import Home from "./components/Home"
import DailyMessages from "./components/DailyMessages"
import { chat } from "@mui/icons-material"

export const UserContext = createContext(null)

export default function App() {
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoaded(true)
    })
  }, [auth])
}
function SignOut(event) {
  event
    .preventDefault()
    .then(() => {
      setUser(null)
    })
    .catch((err) => console.log(err))
}

return (
  <UserContext.Provider value={{ user, setUser, SignOut }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </UserContext.Provider>
)
