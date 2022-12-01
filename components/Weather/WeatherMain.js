import Image from 'next/image';
import CardLight from '../ui/CardLight';

const WeatherMain = (props) => {

    return(
    <CardLight>
      <div className="relative flex justify-between items-center p-1">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="Weather Icon"
            width={100}
            height={100}
          />
          <p className="text-2xl">{props.weatherData.weather[0].main}</p>
        </div>
        <div className="flex flex-col justify-space-between items-center">
          <p className="text-2xl text-dark">Aktuelles Wetter in</p>
          <p className="text-5xl text-light">{props.weatherData.name}</p>
        </div>
        
        <p className="text-5xl p-2">{props.weatherData.main.temp.toFixed()}°</p>
      </div>
    </CardLight>
    )
}

export default WeatherMain;