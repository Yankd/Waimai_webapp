// import axios from 'axios'
import React from 'react';
import './Category.scss'
import {getHeaderData} from "../../actions/categoryAction";
import {connect} from 'react-redux';

/**
 * @constructor: <Category/>
 * @description 搜索框
 */

class Category extends React.Component{
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getHeaderData());
    }

    render() {
        return (
            <div className="category-content clearfix">
                {this.renderItems()}
            </div>
        );
    }

    renderItems(){
        let items = this.props.items;
        items = items.splice(0,8);

        return items.map((item,index)=>{
            return (
                <div key={index} className="category-item">
                    <img className="item-icon" src={item.url}/>
                    <p className="item-name">{item.name}</p>
                </div>

            )
        })
    }

}
export default connect(
    state=>({
        items: state.categoryReducer.items
    })
)(Category);
