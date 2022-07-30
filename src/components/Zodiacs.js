import React from "react";
import Zodiac from "./Zodiac";
import { zodiacList } from "./variables";

class Zodiacs extends React.Component {
  state = {};

  renderZodiacs(zodiacList) {
    return zodiacList.map((zodiac) => {
      return (
        <Zodiac key={zodiac.sign} sign={zodiac.sign} image={zodiac.image} />
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Which is Your Zodiac Sign?</h1>
        <div className="row">{this.renderZodiacs(zodiacList)}</div>
      </div>
    );
  }
}

export default Zodiacs;
