
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useState } from "react";
//screen

import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';

//componunts
import Navbar from './componunts/Navabar';
import Backdrop  from './componunts/Backdrop';
import SideDrawer  from './componunts/SideDrawer';
//import Product  from './componunts/Product';
function App(){

  const  [sideToggle,setSideToggle]= useState (false);
  return(
    <Router>
      <Navbar  click={()=>setSideToggle(true)}/>
      <SideDrawer  show={sideToggle}/>
      <Backdrop  show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
