import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Countrylist from './pages/Countrylist'
import Countrydetails from './pages/Countrydetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Countrylist/>} />
          <Route path='/Country/:name' element={<Countrydetails/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
