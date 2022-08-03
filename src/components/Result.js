import React from "react";
import { connect } from "react-redux";
import { fetchAstro } from "../actions";

class Result extends React.Component {
  componentDidMount() {
    if (this.props.apiSearchTerms.length != 2) {
      window.location.replace("/");
    }
    this.props.fetchAstro();
  }

  renderHoroscope = () => {
    if (!this.props.data) {
      return;
    }
    const zodiac = this.props.apiSearchTerms[0];
    const cappedSign = zodiac[0].toUpperCase() + zodiac.substring(1);

    return (
      <div>
        <h1>
          {cappedSign} horoscope for {this.props.data.current_date}
        </h1>
        <p>
          <strong>Your Prediction</strong>: {this.props.data.description}
        </p>
        <p>
          <strong>Your Zodiac Sign Compatibility</strong>:{" "}
          {this.renderBonusData(this.props.data.compatibility)}
        </p>
        <p>
          <strong>Your Lucky Color</strong>:{" "}
          {this.renderBonusData(this.props.data.color)}
        </p>
        <p>
          <strong>Your Lucky Number</strong>:{" "}
          {this.renderBonusData(this.props.data.lucky_number)}
        </p>
        <p>
          <strong>Your Lucky Time</strong>:{" "}
          {this.renderBonusData(this.props.data.lucky_time)}
        </p>
        <p>
          <strong>Your Mood</strong>:{" "}
          {this.renderBonusData(this.props.data.mood)}
        </p>
      </div>
    );
  };

  renderBonusData(bonusData) {
    if (this.props.isSignedIn) {
      return bonusData;
    } else {
      return "Sign in to see details";
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderHoroscope()}
        <div className="col-sm-4">
          <button
            onClick={() => window.location.replace("/")}
            type="button"
            className="btn btn-success m-2 w-100"
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data.data,
    apiSearchTerms: state.api,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchAstro })(Result);
