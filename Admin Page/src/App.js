import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Login/Login/Login'
import ForgetPassword from './Components/Login/ForgetPassword/ForgetPassword'
import Users from './Components/Pages/Users/Users'
import AddUser from './Components/Pages/Users/AddUser/AddUser'
import EditUser from './Components/Pages/Users/EditUser/EditUser'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/addUser' element={<AddUser />} />
        <Route path='/users/editUser/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
