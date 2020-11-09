import React from 'react';
import Logo from 'assets/svg/Logo.js';
import Search from 'assets/svg/Search.js';
import Profile from 'assets/svg/Profile.js';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <Logo/>
            <div className="header-input--wrapper">
                <Search style={{ marginBottom: 10 }}/>
                <input className="search-input" placeholder="검색어를 입력하세요"/>
            </div>
            <div className="welcome-box" style={{ color: '#FFFFFF' }}>
                <Profile style={{ flex: 1 }}/>
                <div style={{ fontSize: 18, fontWeight: 'bold', flex: 3 }}><span style={{ fontSize: 23, fontWeight: 'bold' }}>진예원 </span>님 환영합니다 !</div>
                <Link to="/" className="logout-box"><div>로그아웃</div></Link>
            </div>
        </div>
    );
}

export default Header;