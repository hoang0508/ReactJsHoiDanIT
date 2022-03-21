import React, { useEffect } from "react";
import axios from "axios";
const Weather = () => {
  useEffect(() => {
    const weatherAPI = async () => {
      const response = await axios({
        method: "POST",
        url: `https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url`,
        data: `https://www.metaweather.com/api/location/1236594`,
      });
      console.log(response.data);
    };
    weatherAPI();
  }, []);
  return <div>Weather app</div>;
};

export default Weather;
