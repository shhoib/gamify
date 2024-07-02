import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Forgot_Password from './components/Logins/Forgot_Password'
import Admin_Login from './components/Logins/Admin_Login'
import Verify from './components/Logins/Verify'
import ResetPassword from './components/Logins/ResetPassword'
import PasswordChanged from './components/Logins/PasswordChanged'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/admin_login' element={<Admin_Login/>} />
       <Route path='/forgot_password' element={<Forgot_Password/>} />
       <Route path='/verify' element={<Verify/>} />
       <Route path='/resetPassword' element={<ResetPassword/>} />
       <Route path='/passswordChanged' element={<PasswordChanged/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
