import React, { Component } from "react";
import Day from "./Day";
import { days } from "./variables";
import { connect } from "react-redux";

class Days extends Component {
  componentDidMount() {
    if (this.props.apiSearchTerms.length != 1) {
      window.location.replace("/");
    }
  }

  renderDays(days) {
    return days.map((day) => {
      return (
        <div key={day} className="col-lg-4">
          <Day day={day} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row text-center">
        <h1 className="text-light">Choose the Day!</h1>
        {this.renderDays(days)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiSearchTerms: state.api,
  };
};

export default connect(mapStateToProps, null)(Days);
