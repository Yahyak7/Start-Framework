import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Protfolio from './Components/Protfolio/Protfolio'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'



let x = createBrowserRouter([
  {path: "",
     element: <Layout />,
     children:[
      {index:true, element: <Home />},
      {path: "about", element: <About />},
      {path: "protfolio", element: <Protfolio />},
      {path: "contact", element: <Contact />},
]},

])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={x}></RouterProvider>


    </>
  )
}

export default App
