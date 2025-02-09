import React from 'react'
import "remixicon/fonts/remixicon.css";
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectorWrapper from './pages/CaptainProtectorWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/> }  />
        <Route path='/login' element={< UserLogin /> }  />
        <Route path='/signup' element={<UserSignup/> }  />
        <Route path='/home' element={ <UserProtectWrapper> <Home/> </UserProtectWrapper> } />
        <Route path='/users/logout' element={ <UserProtectWrapper> <UserLogout/> </UserProtectWrapper> } />
        
        <Route path='/riding' element={ <Riding />} />

        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/captain-home' element={ <CaptainProtectorWrapper> <CaptainHome/> </CaptainProtectorWrapper>  } />
        <Route path='/captain-logout' element={ <CaptainProtectorWrapper> <CaptainLogout/> </CaptainProtectorWrapper> } />
        <Route path='/captain-riding' element={<CaptainRiding/>} />

      </Routes>
    </div>
  )
}

export default App;
