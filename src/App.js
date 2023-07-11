import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  
  return (
    <div className="App">
     <Router> 
       <Navbar></Navbar>
       <Switch>
         <Route path='/' exact component={Home}></Route>
         <Route path='/services'component={Services}></Route>
         <Route path='/products'component={Products}></Route>
         <Route path='/sign-up'component={SignUp}></Route>
         <Route path='/blog'component={Blog}></Route>
         <Route path='/contact'component={Contact}></Route>
       </Switch>
       </Router>
    
    
    </div>
  );
}

export default App;
