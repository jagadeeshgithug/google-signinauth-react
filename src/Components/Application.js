/*
    In this component handling the roueting 
    import user data from the context and then checks the user logged in or not 
    if user logged in then page will redirect to profile
    otherwise redirect the signpage 
*/



import React,{useContext} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import { UserContext } from "../providers/UserProvider";
  //imported home component from components 
  import Home from './Home';
  import Sign from './Sign';
 import Pagenotfound from './Pagenotfound';

const  Application = () => {

    const user = useContext(UserContext);

    return (
            user ? 
                <Home/> 
           :
           <Router>
            <Switch>
                <Route exact path='/' component={Sign} />   
                <Route component={Pagenotfound} />
                </Switch>
           </Router> 
    )
}



export default Application;
