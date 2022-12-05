import React from "react";
import CardDark from "../ui/CardDark";

function WeatherDetail(props) {
  const { minTemp, maxTemp, feelsLikeTemp } = props;
  
  return (
    <CardDark>
      <div className="flex flex-row justify-around pt-5 pb-8 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Gefühlt</p>
          <p className="text-4xl text-light">
            {feelsLikeTemp}°
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Minimal</p>
          <p className="text-4xl text-light">
            {minTemp}°
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-1xl text-light">Maximal</p>
          <p className="text-4xl text-light">
            {maxTemp}°
          </p>
        </div>
      </div>
    </CardDark>
  );
}

export default WeatherDetail;
