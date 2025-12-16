import { useEffect, useState } from "react";

function useFetchImage(currency) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://mxpertztestapi.onrender.com/api/sciencefiction`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return data;
}

export default useFetchImage;
