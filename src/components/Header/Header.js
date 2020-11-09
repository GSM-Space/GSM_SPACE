import React from 'react';
import Logo from 'assets/svg/Logo.js';
import Search from 'assets/svg/Search.js';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Logo/>
            <div className="header-input--wrapper">
                <Search style={{ marginBottom: 10 }}/>
                <input className="search-input" placeholder="검색어를 입력하세요"/>
            </div>
            <div className="welcome-box">

            </div>
        </div>
    );
}

export default Header;