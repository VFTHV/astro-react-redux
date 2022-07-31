import React from "react";
import Zodiac from "./Zodiac";
import { zodiacList } from "./variables";

class Zodiacs extends React.Component {
  renderZodiacs(zodiacList) {
    return zodiacList.map((zodiac) => {
      return <Zodiac key={zodiac.sign} zodiac={zodiac} />;
    });
  }

  render() {
    return (
      <div className="row text-center">
        <div className="row">
          <h1>Which is Your Zodiac Sign?</h1>
        </div>
        {this.renderZodiacs(zodiacList)}
      </div>
    );
  }
}

export default Zodiacs;
