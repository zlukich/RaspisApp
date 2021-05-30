import * as React from "react";
import {compose} from "redux";
import Info from "./Info";
const {connect} = require("react-redux");
import {getInfoTypeName} from "../../store/info-reducer";

class InfoContainer extends React.Component {

    componentDidMount() {
        this.props.getInfoTypeName();
    }

    render() {
        return (
           <Info infoTypes = {this.props.infoTypes} />
        )
    }
};


let mapStateToProps = (state) => {
    return {
        infoTypes: state.infoTypes
    }
}



export default compose(connect(mapStateToProps,
    {getInfoTypeName}))(InfoContainer);