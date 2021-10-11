import React from "react";
import '../index.css';
// convert to functinoal comp
const SignUp =() => {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder="Name" />
               
                    <input type="email" className="form-control" placeholder="Email" />
                
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />

                    <div>
                        <input type="checkbox" id="terms" name="terms" />
                        <label for="terms">By checking this box you agree to the terms and conditions</label>
                    </div>
                    

                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
}

export default SignUp;