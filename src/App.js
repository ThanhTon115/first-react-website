import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
        <Route path ="/" exact />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
