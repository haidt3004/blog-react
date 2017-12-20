import React from 'react';
import { Link } from 'react-router-dom';

const TopNavigation = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#top-nav" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="top-nav">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Category</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default TopNavigation;
