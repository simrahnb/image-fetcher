import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchImages = async (url) => {
    // setIsLoading(true);

    // await axios
    //   .get(url)
    //   .then((res) => {
    //     setResponse(res.data.results);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //    });
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
      //console.log(res.data.results)
    } catch (err) {
      setError(err);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(param);
  }, [param]);

  return {
    response,
    error,
    isLoading,
    fetchImages: (url) => fetchImages(url),
  };
};
