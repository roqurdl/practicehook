export const useConfirm = (message = "", confirm, cancel) => {
  if (typeof confirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      confirm();
    } else {
      try {
        cancel();
      } catch (error) {
        return;
      }
    }
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("DELTEING");
  const abort = () => console.log("ABORTED");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete World</button>
    </div>
  );
}
