import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Lattitude: </div>;
  }
}

export default App;
