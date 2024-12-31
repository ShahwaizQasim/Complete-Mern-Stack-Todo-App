import './App.css'
import { Route, Routes } from "react-router";
import Signup from './pages/Auth/signup';
import Login from './pages/Auth/login';
import Home from './pages/home'
import NotFound from './pages/NotFound';


function App() {

  return (

    <Routes>
      <Route path='/signUp' element={<Signup />} />
      <Route path='/signIn' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>


  )
}

export default App
