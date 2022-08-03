// client ID 834931525945-v2qmvuvev50ld0rn0cm823idhg2i72es.apps.googleusercontent.com
// client secret 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

import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import GoogleSign from "./GoogleSign";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "834931525945-v2qmvuvev50ld0rn0cm823idhg2i72es.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Astro",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButtton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onSignOutClick}
        >
          <GoogleSign /> Sign Out
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-success"
          onClick={this.onSignInClick}
        >
          <GoogleSign /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButtton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
