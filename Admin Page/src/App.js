import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Login/Login/Login'
import ForgetPassword from './Components/Login/ForgetPassword/ForgetPassword'



function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
