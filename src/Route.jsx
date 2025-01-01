import './App.css'
import { Navigate, Outlet, Route, Routes } from "react-router";
import Signup from './pages/Auth/signup';
import Login from './pages/Auth/login';
import Home from './pages/home'
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/navbar'
import Footer from './components/footer';


function App() {

  const { user } = useContext(AuthContext);
  console.log("user in routes", user);


  return (
    <>
      <Routes>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/signIn' element={user ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/' element={!user ? <Navigate to={'/signIn'} /> : <Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>


  )
}

export default App
