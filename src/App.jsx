import { HashRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NavBar from "./components/nav/NavBar"
import Register from './pages/Register'
import Login from './pages/Login'
import { useState } from "react"
import Carrussel from "./pages/Carrussel"


function App() {
  const [user, setUser] = useState(null);
  

  return (
    <>
      <HashRouter>
        {/* <NavBar/> */}
        <Routes>

          <Route element={<Home/>} path="/"/>
          <Route element={<Register setUser={setUser} />} path="/register"/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Carrussel/>} path="/carrussel"/>

        </Routes>


      </HashRouter>
    </>
  )
}

export default App
