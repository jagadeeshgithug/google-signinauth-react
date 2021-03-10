/*
    In this component shows the user profile data to the front end if user logged in 
*/


import React,{useContext} from 'react'

//this will import user datalayer context to this page
import { UserContext } from "../providers/UserProvider";
import {googlesignout} from "../Firebase";

import '../CSS/Home.css';

 const Home = () => {

    //this will copy the user data to the user variable
    const user = useContext(UserContext);

    //this will extract the data from user
    const {photoURL, displayName, email} = user;
    
    return (
        <div class="profile card">
            <img src={photoURL} class="profileimage card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Hi {displayName}</h5>
                <p class="card-text">This is Your Email: {email}</p>
            </div>
            <button className='signoutbtn btn btn-primary' onClick = {googlesignout}>Sign out</button>
        </div>
    )
}

export default Home;