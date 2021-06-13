import * as React from "react";
import {compose} from "redux";
const {connect} = require("react-redux");
import Main from "./components/Main";

class MainContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
           <Main isAuth={this.props.isAuth}/>
        )
    }
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized,
    }
}



export default compose(connect(mapStateToProps,
    {}))(MainContainer);

