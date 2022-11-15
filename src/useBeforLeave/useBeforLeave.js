import { useEffect } from "react";

const useBeforLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

function App() {
  const catching = () => console.log("Pls dont go");
  useBeforLeave(catching);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
