import * as React from "react";
import {compose} from "redux";
import Schedule from "./Schedule";
const {connect} = require("react-redux");
import {getCurrentWeekScheduleThunk} from "../../store/schedule-reducer";

class ScheduleContainer extends React.Component {

    componentDidMount() {
        console.log('SXHEDULR')
        console.log(this.props.SessionID)
        if(this.props.SessionID)
            this.props.getCurrentWeekScheduleThunk({SessionID: this.props.SessionID});
    }

    render() {
        return (
           <Schedule days = {this.props.days} />
        )
    }
};


let mapStateToProps = (state) => {
    return {
        days: state.schedule.days,
        testDay: state.schedule.testDay,
        SessionID: state.auth.SessionID
    }
}



export default compose(connect(mapStateToProps,
    {getCurrentWeekScheduleThunk}))(ScheduleContainer);

