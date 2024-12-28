import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/home.jsx';
import Signup from './pages/Auth/signup.js';
import Login from './pages/Auth/login.js';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/signIn' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
