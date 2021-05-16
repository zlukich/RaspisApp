import * as React from "react";
import {compose} from "redux";
import Schedule from "./Schedule";
const {connect} = require("react-redux");
import {getCurrentWeekScheduleThunk} from "../../store/schedule-reducer";

class ScheduleContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrentWeekScheduleThunk();
    }

    render() {
        return (
           <Schedule days = {this.props.days}/>
        )
    }
};


let mapStateToProps = (state) => {
    return {
        days: state.schedule.days
    }
}



export default compose(connect(mapStateToProps,
    {getCurrentWeekScheduleThunk}))(ScheduleContainer);

