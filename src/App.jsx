import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Forgot_Password from './components/Logins/Forgot_Password';
import Admin_Login from './components/Logins/Admin_Login';
import Verify from './components/Logins/Verify';
import ResetPassword from './components/Logins/ResetPassword';
import PasswordChanged from './components/Logins/PasswordChanged';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import ManageUsers from './components/ManageUsers/ManageUsers';
import UserDetails from './components/ManageUsers/UserDetails';
import UserDeposit from './components/Deposits/UserDeposit';
import DepositDetails from './components/Deposits/DepositDetails';


const MainLayout = ({ children }) => (
  <div className="flex w-full">
    <Sidebar />
    <div className="w-full">
      <Navbar />
      <div className="p-3 xl:p-7 ml-[12%] md:ml-[8%] xl:ml-[5%]">
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin_login" element={<Admin_Login />} />
        <Route path="/forgot_password" element={<Forgot_Password />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/passwordChanged" element={<PasswordChanged />} />

        <Route path="/admin_home" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/admin_manageUsers" element={<MainLayout><ManageUsers /></MainLayout>} />
        <Route path="/admin_UserDetails/:userID" element={<MainLayout><UserDetails /></MainLayout>} />
        <Route path="/admin_UserDeposits" element={<MainLayout><UserDeposit /></MainLayout>} />
        <Route path="/admin_UserDeposits/:id" element={<MainLayout><DepositDetails /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
