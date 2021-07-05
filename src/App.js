import React from "react";
import "./App.css";

import Episodes from "./components/Episodes";
import Episode from "./components/Episode";




import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,

} from 'react-router-dom';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  return (

<Router>
<Switch>
<React.Fragment>
    <div className="container p-4 col-md-10" >

    <Route path="/episodio/:id" component={Episode} />


    <Route path="/" component={Episodes} exact />
    

      <ToastContainer />
    </div>
    </React.Fragment>
  </Switch>
</Router>
  );
}

export default App;
