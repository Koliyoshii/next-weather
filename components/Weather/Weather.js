import React, { Fragment } from "react";
import Image from "next/image";
import WeatherMain from "./WeatherMain";
import WeatherDetail from "./WeatherDetail";
import Container from "../ui/Container";

const Weather = (props) => {
  const { weatherData } = props;
  const icon = weatherData.weather[0].icon;

  return (
    <Fragment>
        <Container>
           <WeatherMain weatherData={weatherData} icon={icon}/> 
        </Container>
        <Container>
           <WeatherDetail weatherData={weatherData}/> 
        </Container>
    </Fragment>
  );
};

export default Weather;
