import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Store from './Component/Store/Store';
import Login_Register from './Component/Login_Register/Login_Register';
import IntroducePage from './Component/IntroducePage/IntroducePage';
import Register from './Component/Login_Register/Register/Register';
import Login from './Component/Login_Register/Login/Login';
import ForgetPassword from './Component/Login_Register/ForgetPassword/ForgetPassword';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
            <Route path="/home/introducePage" element={<IntroducePage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotpassword" element={<ForgetPassword/>}/>
          <Route path="/store" element={<Store/>}/>
        </Routes>
    </div>
  );
}

export default App;
