import "./NavBar.css"
import {Link, NavLink} from 'react-router-dom';
import * as React from "react";

export default function NavBar() {
    return (
        <div className="topnav">
            <Link to="/" className="nav">
                {/*<img src={img} style={{width: 'auto', height: 60}} alt="HomePage"/>*/}
            </Link>
            <div className='navgroup'>
                <NavLink to="/" className="nav">Home</NavLink>
                <NavLink to="digitalcommunication" className="nav">Digital Communication</NavLink>
                <NavLink to="digitalservice" className="nav">Digital Service</NavLink>
                <NavLink to="getinvolved" className="nav">Get Involved</NavLink>
                <NavLink to="avoidingscam" className="nav">Avoiding Scams</NavLink>
                <NavLink to="about" className="nav">About</NavLink>
            </div>
        </div>
    );
}
