import React from "react";

class Zodiac extends React.Component {
  state = {};
  render() {
    return (
      <div className="col-4 my-3">
        <div className="row justify-content-center">
          <img
            src={require(`../pics/${this.props.image}`)}
            className="img-fluid w-50"
          />
        </div>
        <button type="button" className="btn btn-success mt-2 w-100">
          {this.props.sign}
        </button>
      </div>
    );
  }
}

export default Zodiac;
