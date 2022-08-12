import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PRODUCT from './Components/PRODUCT/PRODUCT'
// import './Components/LOGIN_REGISTER/LOGIN_REGISTER.css'
import PAY_PAGE from './Components/PAY_PAGE/PAY_PAGE'
import HOME from './Components/HOME/HOME';
import Navbar from './Components/NAVBAR/Navbar';
import Register from './Components/LOGIN_REGISTER/Register/Register';
import Login from './Components/LOGIN_REGISTER/Login/Login';
import ForgetPassword from './Components/LOGIN_REGISTER/ForgetPassword/ForgetPassword';
import UserPage from './Components/USER/UserPage'
import Store from './Components/STORE/Store';
import Introduce from './Components/INTRODUCE/IntroducePage';
import { useEffect, useRef, useState } from 'react';

function App() {
  const footer = useRef();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [CartLength, setLength] = useState(0);

  return (
      <div className="App">
        <Navbar CartLength={CartLength} setLength={setLength} footer={footer} />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forget' element={<ForgetPassword />}></Route>
          <Route path='/' element={<HOME refs={footer} />} />
          <Route path='/products' element={<PRODUCT setLength={setLength} refs={footer} />} />
          <Route path='/payments' element={<PAY_PAGE setLength={setLength} />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/store' element={<Store refs={footer} />} />
          <Route path='/introduce' element={<Introduce refs={footer} />} />
        </Routes>
      </div>
  );
}

export default App;
