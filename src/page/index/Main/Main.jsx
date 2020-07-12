import React from 'react';
import {connect} from 'react-redux';
// import {addTodo} from "../actions/tabAction";
import BottomBar from "../BottomBar/BottomBar.jsx";//记住：jsx文件一点要加后缀
import Home from "../Home/Home.jsx";
class Main extends React.Component{
    constructor(props) {
        super(props);

        // this.props.num;
    }

    render(){
        return (
            <div>
                <Home />
                <BottomBar />
            </div>
        );
    }
}

export default connect(
    // state=>({
    // })
)(Main);

