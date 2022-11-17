import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const checkScreen = (isFull) => {
    if (callback && typeof callback === "funtion") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullscreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    checkScreen(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    checkScreen(false);
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
