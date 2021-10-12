import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
               <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
        }}>
           <div>
           <h1>Create an Account</h1>
           <input style={{marginBottom:"20px"}} type="email" placeholder="enter your email" />
           <br />
           <input style={{marginBottom:"20px"}}  type="password" placeholder="enter password" />
           <br />
           <input style={{marginBottom:"20px"}}  type="password" placeholder="re-enter password" />
           <br />
           <input type="submit" value="Submit" />

           <div>----------or-----------</div>
           <button>Google Sign In</button>
           <p>Already have an account? <Link to="/login">Log in</Link></p>
           </div>
        </div>
        </div>
    );
};

export default Register;