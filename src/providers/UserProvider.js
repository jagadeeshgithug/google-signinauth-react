import React, {useEffect , createContext ,useState} from 'react'

//this is imported function from Firebase.js
import auth from '../Firebase';
import 'firebase/auth';
import firebase from 'firebase/app';

//it will create the data layer
export const UserContext = createContext({ user: null });

 
export default (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
      // const { displayName, email }  = user;
      
        setUser(user)
        
      })
        },[]) 
     console.log('user is provider:', user)
    return (
      
        <UserContext.Provider value={user}>
        {props.children}
        </UserContext.Provider>
    )
}


