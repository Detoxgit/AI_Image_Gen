import React, { useContext } from 'react'
import Home from './pages/Home'
import  Result  from './pages/Result'
import BuyCreadit from './pages/BuyCreadit'
import {Routes,Route} from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Footer from './componenets/footer'
import Login from './componenets/Login'
import { AppContext } from './context/app_context'
import { ToastContainer} from 'react-toastify';

const App = () => {
  const {showLogin}=useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-teal-50 to-blue-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCreadit/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
