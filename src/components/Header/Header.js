import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="main-container">
            <h1>Api Data Use</h1>
            <Link to="users">
              <span>Multiple Users Api Use</span>
            </Link>
            <Link to="single-users">
              <span>Single User Api Use</span>
            </Link>
            <Link to="random-single-info">
              <span>Multiple Layers Api Use</span>
            </Link>   
        </div>
    );
};

export default Header;