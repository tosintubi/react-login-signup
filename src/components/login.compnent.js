import React from "react";
import imgPlaceHolder from '../images/img-placeholder.jpg';
import LoginGoogle from "./google.component";
import LogoutGoogle from "./google.logout.component";


const Login =() => {
        return (
            <div>
                <LoginGoogle/>

                <LogoutGoogle/>

            </div>
            
            // <form>
            //     <h3>Sign In</h3>

            //         <input type="email" className="form-control" placeholder="Enter email" />
                
            //         <input type="password" className="form-control" placeholder="Enter password" />

            //         <input type="checkbox" className="custom-control-input" id="customCheck" />
            //         <label className="custom-control-label" htmlFor="customCheck">Remember me</label>

            //     <button type="submit" className="btn btn-primary btn-block">Submit</button>
            //     <p className="forgot-password text-right">
            //         Forgot <a href="#">password?</a>
            //     </p>
            // </form>
        );
}

export default Login;