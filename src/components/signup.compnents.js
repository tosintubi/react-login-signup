import React, { Component } from "react";
import '../index.css';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="Firstname" />
                

                
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Lastname" />
               

                
                    <label>Email address</label>
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
}