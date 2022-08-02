import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PRODUCT from './Components/PRODUCT/PRODUCT'
// import './Components/LOGIN_REGISTER/LOGIN_REGISTER.css'
import PAY_PAGE from './Components/PAY_PAGE/PAY_PAGE'
import HOME from './Components/HOME/HOME';
import Navbar from './Components/NAVBAR/Navbar';
import Register from './Components/LOGIN_REGISTER/Register/Register';
import Login from './Components/LOGIN_REGISTER/Login/Login';
import ForgetPassword from './Components/LOGIN_REGISTER/ForgetPassword/ForgetPassword';
import UserPage from './Components/USER/UserPage'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forget' element={<ForgetPassword />}></Route>
          <Route path='/' element={<HOME />} />
          <Route path='/products' element={<PRODUCT />} />
          <Route path='/payments' element={<PAY_PAGE />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
