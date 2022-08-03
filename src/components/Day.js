import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addDay } from "../actions";

class Day extends React.Component {
  cappedDay = this.props.day[0].toUpperCase() + this.props.day.substring(1);

  addSearchTerm = (searchTerm) => {
    this.props.addDay(searchTerm);
  };

  render() {
    return (
      <Link to="/result" onClick={() => this.addSearchTerm(this.props.day)}>
        {console.log(this.props)}
        <div className="row justify-content-center">
          <img
            src={require(`../pics/${this.props.day}.png`)}
            className="img-fluid w-25"
          />
        </div>
        <button
          type="button"
          className="btn btn-success rounded-pill mt-2 w-50 fs-5"
        >
          {this.cappedDay}
        </button>
      </Link>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    apiSearchTerms: state.api,
  };
};

export default connect(mapStateToProps, { addDay })(Day);
