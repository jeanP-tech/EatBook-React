import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/review">Review</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
