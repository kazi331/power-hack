import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected> <Home /> </Protected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}


export default App;
