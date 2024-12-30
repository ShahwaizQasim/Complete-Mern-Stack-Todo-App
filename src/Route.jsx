import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Signup from './pages/Auth/signup';
import Login from './pages/Auth/login';
import Home from './pages/home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/signIn' element={<Login /> } />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
