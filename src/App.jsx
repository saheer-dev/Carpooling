import { useState } from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Choose from './components/Choose'
import Create from './components/Create'
import SignUp from './components/SignUp'
import MyComponent from './components/map'

function App() {

  return (
    <>
    <Router>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/go' element={<Create/>}/>
        <Route path='/go/sign' element={<SignUp/>}/>
        <Route path='/go/sign/choose' element={<Choose/>}/>
        <Route path='/map' element={<MyComponent/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
