import * as React from "react";
import {compose} from "redux";
import LoginField from '../../components/LoginField';
const {connect} = require("react-redux");
import {loginThunk} from '../../store/auth-reducer'

class LoginContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
           <LoginField login={this.props.loginThunk}/>
        )
    }
};


let mapStateToProps = (state) => {
    return {
    }
}



export default compose(connect(mapStateToProps,
    {loginThunk}))(LoginContainer);

