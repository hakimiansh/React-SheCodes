import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//developed components
import Dashboard from "./components/Dashboard/Dashboard"
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";

import "./App.css";


//aplication routes
const App = () => (

  <Router>
  <div>
    <Header title="Weater app" />
    <hr/>
    <Switch>
        
          <Route exact  path="/" component={Dashboard} />
          <Route exact  path="/favorites" component={Favorites} />
          {/* </*Route path="/edit/:id" component={Edit} /> */}
          {/* <Route path="/help" component={Help} />  */}
          {/* if page dosn't found */}
          <Route component={NotFoundPage} />
        </Switch>
       
   
    {/* <Footer /> */}
    </div>
  </Router>
 
   
);

export default App;