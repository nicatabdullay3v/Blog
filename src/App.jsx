import { useState } from 'react'

import { RouterProvider } from "react-router-dom";
import router from "./routes/root";
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <>

      <RouterProvider router={router} />
    </>

  )
}

export default App
