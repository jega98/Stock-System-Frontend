import React from "react";
import {Link} from 'react-router-dom';


function Home() {




  return (
    <div className="container">
       

       <ul>
            <li>
            <Link to="/Login">Login</Link>
            </li>
            <li>
            <Link to="/Register">Register</Link>
            </li>
            <li>
            <Link to="/view-stock">view-stock</Link>
            </li>
            <li>
            <Link to="/add-stock">add-stock</Link>
            </li>
        </ul>
    </div>
  );
}

export default Home;