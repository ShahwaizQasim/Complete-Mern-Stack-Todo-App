import './App.css'
import { Navigate, Route, Routes } from "react-router";
import Signup from './pages/Auth/signup';
import Login from './pages/Auth/login';
import Home from './pages/home'
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/signIn' element={user ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/' element={user ? <Home /> : <Navigate to={'/signIn'} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>


  )
}

export default App
