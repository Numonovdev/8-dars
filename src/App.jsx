import {Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <>
    <header className="flex justify-between mx-auto  max-w-6xl w-full gap-5 mt-10 font-bold">
      <Link className="py-2 px-5 rounded-lg bg-white border hover:bg-transparent border-transparent hover:border hover:border-white hover:text-white" to="/">Home</Link>
      <div className="flex gap-2">
        <Link className="py-2 px-5 bg-white rounded-lg hover:text-white hover:bg-green-500 border-transparent" to="/login">Login</Link>
        <Link className="py-2 px-5 bg-white rounded-lg hover:text-white hover:bg-green-500 border-transparent" to="/register">Register</Link>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
  )
}

export default App
