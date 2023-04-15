import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="w-96 card card2"> Hi from Signup
            <h2 className="brand-logo center">Instagram</h2>
            <h3 className="card-title center">SignUp Section</h3>
            <input type="text" placeholder="Full Name" />
            <p className="leftgrey">Date of Birth</p>
            <input placeholder="Date of Birth" type="date" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <h5 className="center pointer"><Link>Already have an account?</Link></h5>
            <h5 className="center pointer"><Link to="/login">Click here to login</Link></h5> */}

            {/* <div className="card-action center">
                <Link to="/signup"class="waves-effect waves-light btn blue white-text btntxt">Sign Up</Link>
            </div> */}
        </div>
    )
}

export default Signup
