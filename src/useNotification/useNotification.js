const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNoti;
};

function App() {
  const triggerNoti = useNotification(`Can I steal your wallet?`, {
    body: `gggggg`,
  });
  return (
    <div className="App">
      <button onClick={triggerNoti}>Noti</button>
    </div>
  );
}
