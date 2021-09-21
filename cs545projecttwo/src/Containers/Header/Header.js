import React from "react";
import { Link } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import "./Header.css";

const Header=()=> {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;