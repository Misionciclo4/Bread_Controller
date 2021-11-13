import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navegation from './Components/Navegation'
import EditProducto from './Components/EditProducto'
import CreaProducto from './Components/CreaProducto'
import EliminarProducto from './Components/EliminarProducto'




function App() {
  return (
    
    <Router>
      <Navegation/>
      
      <Route path="/menu" component={CreaProducto} />
      <Route path="/Inventarios" component={EditProducto} />
      <Route path="/Login" component={EliminarProducto} />

      </Router>
  );                                          
}

export default App;
