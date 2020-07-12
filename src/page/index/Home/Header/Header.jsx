import React from 'react';
import './Header.scss'
import SearchBar from "../SearchBar/SearchBar.jsx";

/**
 * @constructor: <Header/>
 * @description 首页代码
 */

class Header extends React.Component{
    constructor() {
        super();
    }

    render() {
        return (

            <div className="header">
                <SearchBar />
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
        );
    }

}

export default Header;