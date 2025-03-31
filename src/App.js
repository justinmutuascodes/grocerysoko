import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetProducts from './components/GetProducts';
import AddProduct from './components/AddProduct';
import SingleProducts from './components/SingleProduct';
import AboutUs from './components/AboutUs';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Router> {/* Now using BrowserRouter */}
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<GetProducts/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/product' element={<SingleProducts/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;