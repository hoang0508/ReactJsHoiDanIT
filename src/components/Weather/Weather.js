import React, { useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const weatherAPI = async () => {
      const response = await axios({
        method: "POST",
        url: `https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url`,
        data: { url: `https://www.metaweather.com/api/location/1236594` },
      });
      console.log(response.data);

      setTimeout(() => {
        setTitle(response.data.title);
      }, 3000);
    };
    weatherAPI();
  }, []);
  return <div>Weather app = {title}</div>;
};

export default Weather;
