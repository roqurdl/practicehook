import { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  function onScroll() {
    setState({ x: window.scrollX, y: window.scrollY });
  }
  useEffect(() => {
    window.addEventListener(`scroll`, onScroll);
    return () => window.removeEventListener(`scroll`, onScroll);
  }, []);
  return state;
};

function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}
