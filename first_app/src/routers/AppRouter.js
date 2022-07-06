import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//developed components
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Favorites from "../components/Favorites/Favorites";
const routes: Routes = [
    {path: '', component: Dashboard,  pathMatch: 'full'},
    {path:'dashboard', component: Dashboard},
    {path:'favorites', component: Dashboard},
    {path:'dashboard/:id', component: Dashboard},
  ];

  //aplication routes
const AppRouter = () => (
    <BrowserRouter>
      <Header title="Weater app" />
      <div style={{ flex: 1, marginTop: "15rem" }}>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/favorites" component={Favorites} />
          {/* </*Route path="/edit/:id" component={Edit} /> */}
          {/* <Route path="/help" component={Help} />  */}
          {/* if page dosn't found */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
  
  export default AppRouter;