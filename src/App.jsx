import './App.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

// context
import { AuthProvider } from "./context/AuthContext"

//pages
import Home from './pages/home/Home';

//components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
