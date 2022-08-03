import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addZodiac } from "../actions";

class Zodiac extends React.Component {
  cappedSign =
    this.props.zodiac.sign[0].toUpperCase() +
    this.props.zodiac.sign.substring(1);

  addSearchTerm = () => {
    this.props.addZodiac(this.props.zodiac.sign);
  };

  render() {
    return (
      <div
        className="col-6 col-lg-4 col-xl-3 my-3"
        onClick={this.addSearchTerm}
      >
        <Link className="link-unstyled" to="/day">
          <div className="row justify-content-center">
            <img
              src={require(`../pics/${this.props.zodiac.image}`)}
              className="img-fluid w-50"
            />
          </div>
          <button
            type="button"
            className="btn btn-success rounded-pill mt-2 w-75 fs-5"
          >
            {this.cappedSign}
          </button>
        </Link>
        <p className="text-light fw-bold">{this.props.zodiac.dob}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     apiSearchTerms: state.api,
//   };
// };

export default connect(null, { addZodiac })(Zodiac);
