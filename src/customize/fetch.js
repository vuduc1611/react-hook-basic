import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        setData(data);
        setIsLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      alert(e.message);
    }
  }, []);

  return { data, isLoading, isError };
};
export { useFetch };
