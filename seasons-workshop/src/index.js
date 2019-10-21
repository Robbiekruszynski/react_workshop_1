import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //this is the only time we do a direct assignment to this.state
    this.state = { lat: null, errorMessage: " " };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update we used setState
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div> Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));