import "./App.css";
import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "funtion") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "funtion") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? `Full` : `small`);
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
          style={{ width: "500px", height: "500px" }}
          alt="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
        />
        <button onClick={exitFull}>Exit Full</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
}

export default App;
