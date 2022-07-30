import React, { Component } from "react";
import { days } from "./variables";

class Days extends Component {
  renderDays(days) {
    return days.map((day) => {
      return (
        <div className="col-4">
          <button type="button" className="btn btn-success m-2 w-100">
            {day}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Choose the Day!</h1>
        <div className="row">{this.renderDays(days)}</div>;
      </div>
    );
  }
}

export default Days;
