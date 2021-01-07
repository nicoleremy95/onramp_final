import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  const getData = () => {
    fetch('/api')
      .then((result) => result.text())
      .then((res) => setData(res));
  };
  return (
    <div className="App">
      <header className="App-header">
       <h1>onramp</h1>
      </header>
    </div>
  );
}

export default App;
