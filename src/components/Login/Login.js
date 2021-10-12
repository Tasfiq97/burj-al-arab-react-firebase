import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {useLocation,useHistory} from "react-router-dom";

const Login = () => {
  const {signInGoogle}=useAuth();
  const location =useLocation();
 const history=useHistory() 
 const redirect = location.state?.from || "/home"; 

 const handleGoogleSign=()=>{
     signInGoogle()
     .then(result=>{
         history.push(redirect)
  
     })
 }
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
        }}>
           <div>
           <h1>Please Login</h1>
           <input style={{marginBottom:"20px"}} type="email" placeholder="enter your email" />
           <br />
           <input style={{marginBottom:"20px"}}  type="password" placeholder="enter password" />
           <br />
           <input type="submit" value="Submit" />

           <div>----------or-----------</div>
           <button onClick={handleGoogleSign}>Google Sign In</button>
           <p>New to burj-arab ? <Link to="/register">Create an account</Link></p>
           </div>
        </div>
    );
};

export default Login;