import './App.css';
import Cart from './components/Cart';
import Dashbord from './components/Dashbord';
import Product from './components/Product';
import NavbarNav from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavbarNav />
        <Routes>
          <Route exact path='/' element={<Dashbord />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
