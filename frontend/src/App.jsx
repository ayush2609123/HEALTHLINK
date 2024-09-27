import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import Page from './components/Page'
import Doctors from './components/Doctors'
import Login from './components/LoginForm'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import DoctorPage from './components/DoctorPage'
import DiseasePricePredictor from './components/DiseasePricePredictor'
import RoomPage from './components/RoomPage'
import RoomHome from './components/RoomHome'

function App() {


  return (
    <>
    
<Routes>
  <Route path="/" element={<Page/>} />
  <Route path="/room/:roomId" element={<RoomPage/>}/>
  <Route path='/emergency' element={<RoomHome/>}/>
</Routes>

    {/* <div>
    <Header/>
    <Page/>
    <Doctors/>
    <LoginForm/>
    <RegistrationForm/>
    <DoctorPage/>
    <DiseasePricePredictor/>
    </div> */}
    </>
  )
}

export default App
