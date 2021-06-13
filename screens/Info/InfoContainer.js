import * as React from "react";
import {compose} from "redux";
import Info from "./Info";
const {connect} = require("react-redux");

class InfoContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
           <Info infoTypes = {this.props.infoTypes} />
        )
    }
};


let mapStateToProps = (state) => {
    return {
        infoTypes: state.info.infoTypes
    }
}



export default compose(connect(mapStateToProps,
    {}))(InfoContainer);