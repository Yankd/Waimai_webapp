// import axios from 'axios'
import React from 'react';
import './ContentList.scss'
import {getListData} from "../../actions/contentListAction";
import {connect} from 'react-redux';

/**
 * @constructor: <ContentList/>
 * @description 附近商家列表
 */

class ContentList extends React.Component{
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getListData());
    }

    render() {
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                {this.renderItems()}
            </div>
        );

    }


    renderItems(){
        let list = this.props.list;
        return list.map((item, index)=>{
            return <div key={index}>{item.name}</div>
        })
    }

}
export default connect(
    state=>({
        list: state.contentListReducer.list
    })
)(ContentList);
