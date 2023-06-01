import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // 1st step
    async function fetchData() {
      try {
        let res = await axios.get(url, {
          CancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : [];
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      ourRequest.cancel("Operation canceled by the user");
    };
  }, [url]);

  return { data, isLoading, isError };
};
export { useFetch };
