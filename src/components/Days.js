import React, { Component } from "react";
import { days } from "./variables";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addDay, fetchAstro } from "../actions";

class Days extends Component {
  handleGetData = (searchTerm) => {
    this.props.addDay(searchTerm);
    this.props.fetchAstro();
  };

  renderDays(days) {
    return days.map((day) => {
      const cappedDay = day[0].toUpperCase() + day.substring(1);
      return (
        <div key={day} className="col-4">
          <button
            onClick={() => this.handleGetData(day)}
            type="button"
            className="btn btn-success m-2 w-100"
          >
            {cappedDay}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1 className="text-center">Choose the Day!</h1>
        {/* <Link to="/result"> */}
        <div className="row">{this.renderDays(days)}</div>
        {/* </Link> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    apiSearchTerms: state.api,
  };
};

export default connect(mapStateToProps, { addDay, fetchAstro })(Days);
