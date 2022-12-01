import React from "react";
import CardDark from "../ui/CardDark";

function WeatherDetail(props) {
  const { weatherData } = props;
  console.log(weatherData);
  return (
    <CardDark>
      <div className="flex flex-row justify-around pt-5 pb-8">
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Gefühlt</p>
          <p className="text-4xl text-light">
            {weatherData.main.feels_like.toFixed()}°
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Minimal</p>
          <p className="text-4xl text-light">
            {weatherData.main.temp_min.toFixed()}°
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Maximal</p>
          <p className="text-4xl text-light">
            {weatherData.main.temp_max.toFixed()}°
          </p>
        </div>
      </div>
    </CardDark>
  );
}

export default WeatherDetail;
