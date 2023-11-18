import { HashRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NavBar from "./components/nav/NavBar"
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
 

  return (
    <>
      <HashRouter>
        <NavBar/>
        <Routes>

          <Route element={<Home/>} path="/"/>
          <Route element={<Register/>} path="/register"/>
          <Route element={<Login/>} path="/login"/>
          

        </Routes>


      </HashRouter>
    </>
  )
}

export default App
