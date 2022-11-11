import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
      return () => {
        if (element.current) {
          element.current.removeEventListenr(`click`, onClick);
        }
      };
    }
    return typeof onClick !== "function" ? undefined : element;
  }, []);
  return element;
};

function App() {
  const hello = () => {
    console.log(`HELLO`);
  };
  const title = useClick(hello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
