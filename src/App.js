import React from 'react';
import Navigation from "./components/Navigation";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Router />
      </div>
    </div>
  );
}

export default App;
