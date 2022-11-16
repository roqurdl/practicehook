import { useState, useEffect } from "react";

const useNetwork = () => {
  const [state, setState] = useState(navigator.onLine);
  const handleChange = () => {
    setState(navigator.onLine);
  };
  function checkSensor() {
    window.addEventListener(`online`, handleChange);
    window.addEventListener(`offline`, handleChange);
  }
  function removeSensor() {
    window.removeEventListener(`online`, handleChange);
    window.removeEventListener(`offline`, handleChange);
  }
  useEffect(() => {
    checkSensor();
    removeSensor();
  }, []);
  return state;
};

function App() {
  const netWorkChange = (online) => {
    console.log(online ? "OnLine" : "OffLine");
  };
  const onLine = useNetwork(netWorkChange);
  return (
    <div className="App">
      <h1>{onLine ? `Online` : `Offline`}</h1>
    </div>
  );
}
