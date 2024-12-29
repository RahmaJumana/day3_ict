import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import LibraryTable from './components/LibraryTable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Language from './components/Language'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/librarytable" element={<LibraryTable />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/language' element={<Language />} />
        <Route path='/api' element={<Api />} />
        <Route path='/product'element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
