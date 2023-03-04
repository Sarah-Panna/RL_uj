import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Record from './pages/Record';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );

  }




export default App;
