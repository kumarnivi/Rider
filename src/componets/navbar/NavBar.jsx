import React from "react";
import {Link} from 'react-router-dom'
import Loading from "../Spinner/Spinner";


let NavBar = () => {
    return (
        <React.Fragment>
            <div>
            <Loading/>
            </div>

           <nav className="navbar navbar-dark bg-dark navbar-expand-sm" >
            <div className="container">
           <Link to={'/'} className="navbar-brand"> 
            <i className="fa fa-home text-warning p-2"/>Riders</Link>
            </div>
           </nav>
        </React.Fragment>
    )
}

export default NavBar;