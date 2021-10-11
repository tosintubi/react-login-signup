import React from 'react';
import imgPlaceHolder from '../images/img-placeholder.jpg';

const SignUp =() => { 
        return (
            <form>
                {/* <img src={imgPlaceHolder} alt="yakitabu.io"/> */}
                <h3>Welcome</h3>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="text">
                    I have an account
                </p>
               
                
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        );
}
export default SignUp;