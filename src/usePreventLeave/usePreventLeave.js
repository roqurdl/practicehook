const usePreventLeave = () => {
    const listener = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener(`beforeunload`, listener);
    const disablePrevent = () =>
      window.removeEventListener(`beforeunload`, listener);
    return { enablePrevent, disablePrevent };
  };
  
  function App() {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
      <div className="App">
        <button onClick={enablePrevent}>Protected</button>
        <button onClick={disablePrevent}>unProtected</button>
      </div>
    );