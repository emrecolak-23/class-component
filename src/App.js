import SeasonDisplay from './SeasonDisplay';

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <div>
      <SeasonDisplay />
    </div>
  );
}

export default App;
