import * as React from "react";
import {compose} from "redux";
import RegistrationField from '../../components/RegistrationField'
const {connect} = require("react-redux");
import {registrationThunk} from '../../store/auth-reducer'

class RegistrationContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
           <RegistrationField registration = {this.props.registrationThunk}/>
        )
    }
};


let mapStateToProps = (state) => {
    return {
    }
}



export default compose(connect(mapStateToProps,
    {registrationThunk}))(RegistrationContainer);

