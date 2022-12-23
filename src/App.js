import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
function App() {
  return (
    <div className="App">
   <Navbar />
   <BrowserRouter>
   <Routes>
   <Route path="/" exact element={<Home/>} />
   <Route path="/cart" exact element={<Cart/>} />
   <Route path="/login" exact element={<Login/>} />
   <Route path="/register" exact element={<Register/>} />
   </Routes>

    </BrowserRouter>
 
    </div>
  );
}

export default App;
