import Image from "next/image";
import CardLight from "../ui/CardLight";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const DUMMY_CITIES = [
  {
    city: "Munich",
    isFavorite: true,
  },
  {
    city: "Berlin",
    isFavorite: false,
  },
  {
    city: "Stuttgart",
    isFavorite: false,
  },
  {
    city: "Hamburg",
    isFavorite: true,
  },
];

const WeatherMain = (props) => {
  const { main, icon, name, temperature} = props;
  const [isFavorite, setIsFavorite] = useState(false);

  

  useEffect(() => {
    const currentCity = name;
    
    DUMMY_CITIES.map(elem => {
      
      if (elem.city === currentCity) {
        console.log(elem)
        if (elem.isFavorite) {
          setIsFavorite(true);
        }
      }
    })
  },[name])

  const toggleFavorites = () => {
    setIsFavorite(!isFavorite);
    const currentCity = name;
    //http post to change isFavorite
  }

  return (
    <CardLight>
      <div className="relative flex justify-between items-center p-1">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            width={100}
            height={100}
          />
          <p className="text-2xl">{main}</p>
        </div>
        <div id={name} className="flex flex-col justify-space-between items-center">
          <p className="text-2xl text-dark">Aktuelles Wetter in</p>
          <p className="text-5xl text-light">{name}</p>
          <button className=" p-2" onClick={toggleFavorites}>
            {!isFavorite && <BsStar size={20}/>}
            {isFavorite && <BsStarFill size={20}/>}
          </button>
        </div>

        <p className="text-5xl p-2">{temperature}°</p>
      </div>
    </CardLight>
  );
};

export default WeatherMain;
