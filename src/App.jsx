import './App.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

//pages
import Home from './pages/home/Home';

//components
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
