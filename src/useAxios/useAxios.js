import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const reload = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  if (!opts) {
    return;
  }
  return { ...state, reload };
};

function App() {
  const { loading, error, data, reload } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading:${loading}\nData:${JSON.stringify(data)}\nError:${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? `Loading...` : `Done`}</h2>
      <button onClick={reload}>Update</button>
    </div>
  );
}
