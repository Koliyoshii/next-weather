import React, { Fragment } from "react";
import WeatherMain from "./WeatherMain";
import WeatherDetail from "./WeatherDetail";
import Container from "../ui/Container";

const Weather = (props) => {
  const { weatherData } = props;
  
  //const icon = weatherData.weather[0].icon;
  weatherData.map((weather) => console.log(weather));

  return (
    <Fragment>
      <ul className=" pt-5 pb-5">
        {weatherData.map((elem) => {
          return (
            <li key={elem.name}>
              <Container>
                <WeatherMain
                  key={elem.name}
                  main={elem.weather[0].main}
                  icon={elem.weather[0].icon}
                  name={elem.name}
                  temperature={elem.main.temp.toFixed()}
                />
              </Container>

              <Container>
                <WeatherDetail
                  minTemp={elem.main.temp_min.toFixed()}
                  maxTemp={elem.main.temp_max.toFixed()}
                  feelsLikeTemp={elem.main.feels_like.toFixed()}
                />
              </Container>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Weather;
