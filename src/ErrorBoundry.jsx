import { Link } from "react-router-dom";

import { Component } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundry component caught error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go to the home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
