import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "New York",
    country: "US",
    temperature: 3.61,
    temperatureMin: 2.63,
    temperatureMax: 4.6,
    humidity: 55,
    feelsLike: -1.71,
    weather: "scattered clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
