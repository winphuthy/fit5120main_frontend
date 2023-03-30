import "./NavBar.css"
import {Link, NavLink} from 'react-router-dom';
import img from '../../../../images/icon.png'

export default function NavBar() {
    return (
        <div className="topnav flex justify-between">
            <Link to="/" className="nav">
                <img src={img} style={{width: 'auto', height: 80}} alt="HomePage"/>
            </Link>
            <div className="flex">
                <NavLink to="/" className="nav">Main</NavLink>
                {/*<NavLink to="funtwo" className="nav">Waste Tracker</NavLink>*/}
                {/*<NavLink to="about" className="nav">About</NavLink>*/}
            </div>
        </div>
    );
}
