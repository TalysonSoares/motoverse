import './App.css';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from "./context/AuthContext"

//components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CreateProduct from './pages/createProduct/CreateProduct';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();
  

  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

  }, [auth])

  useEffect(() => {
    if (user && user.uid === "r1BWzRIjVJX0NMyLtEMpIcufXq13") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path='/products/create' element={isAdmin ? <CreateProduct /> : <Navigate to="/" />} />
              <Route path='/dashboard' element={isAdmin ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
