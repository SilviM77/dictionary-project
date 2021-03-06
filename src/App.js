import logo from "./wcoder.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo}
        className="App-logo
        img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunshine" />
      </main>
      <footer className="text-center">
      <small>Coded by Silvia Marconi</small> </footer>
      
    </div>
    </div>
  );
}

export default App;
