import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Login = () => {
    return (
        <div className="w-96 card card2" >Hello
            <h2 className="brand-logo center">Instagram</h2>
            <h3 className="card-title center">Login Section</h3>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <h5 className="center pointer"><Link>Don't have an account?</Link></h5>
            <h5 className="center pointer"><Link to="/signup">Click here to signup</Link></h5> */}
            {/* <div className="card-action center">
                <Link class="waves-effect waves-light btn blue white-text btntxt">Login</Link>
            </div> */}
        </div>
    )
}

export default Login
