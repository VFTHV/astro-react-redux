import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  render() {
    return <div>Result</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data.data,
  };
};

export default connect(mapStateToProps)(Result);
