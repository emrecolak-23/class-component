import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({ lat: position.coords.latitude, errorMessage: '' }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('my component was just updated -- it rerendered');
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

export default App;
