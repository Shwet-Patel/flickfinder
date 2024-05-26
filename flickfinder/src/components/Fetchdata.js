import { useState, useEffect } from "react";
import axios from "axios";

const Fetchdata = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apikey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apikey}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .request(options)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default Fetchdata;
