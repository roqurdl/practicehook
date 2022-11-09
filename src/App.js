import "./App.css";
import { useState } from "react";

function App() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Write Name" {...name} />
    </div>
  );
}

export default App;
