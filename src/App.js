import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/pages/Home';
{/* 
<Router>: The router that keeps the UI in sync with the URL
<Link>: Renders a navigation link
<Route>: Renders a UI component depending on the URL 
*/}

function App() {
  return (
    <>
    <Router>
      <Navbar/>  
      <Switch>
        <Route path ="/" exact component={Home}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
