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
// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
            <Route path="/home/introducePage" element={<IntroducePage />} />
          <Route path="/register" element={<Login_Register/>}/>
          <Route path="/store" element={<Store/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
