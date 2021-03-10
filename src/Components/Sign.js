/*
    In this component handle the user sign 
*/
import React from 'react'

import {signInWithGoogle} from '../Firebase';

import '../CSS/Sign.css';

const  Sign = () => {
    
    return (
       
        <div className=" signpage card" > 
            <div className="card-body">
                
                <button type="button" className="signbtn btn btn-primary" onClick={signInWithGoogle}> <i class="fab fa-google"></i> Sign in with google</button> 
            </div>
         </div>

    )
}

export default Sign;