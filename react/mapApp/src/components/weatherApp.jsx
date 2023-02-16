import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import WeatherMap from "./weatherMap";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`
  }, [weather])

  async function loadInfo(city = "london") {

    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=`+city
      );

      const json = await request.json();

      setWeather(json);
      console.log(json);
    } catch (error) {
        console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="grid grid-cols-2 gap-2 min-h-screen">
        <div className="flex justify-center flex-wrap content-evenly flex-row">
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather}/>
        </div>
        <div className="flex justify-center items-center">
            <WeatherMap weather={weather}/>
        </div>
    </div>
  );
}
