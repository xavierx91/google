// App.jsx
 
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Search from './pages/Search'
import './App.css';


 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        // Set up the Router
        <Route exact path="/" component={Projects} />
        <Route path="/Search" component={Search} />
        <Route path="/About" component={About} />


        
      <Footer/>
  
        {/* <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div> */}
      </div>
    </BrowserRouter>
  );
}
 
export default App;