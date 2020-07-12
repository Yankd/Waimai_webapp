import React from 'react';
import Header from "./Header/Header.jsx";
import Category from './Category/Category.jsx';
import ContentList from "./ContentList/ContentList.jsx";

/**
 * @constructor: <Home/>
 * @description 首页代码
 */

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Category/>
                <ContentList/>
            </div>
        );
    }

}

export default Home;