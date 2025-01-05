import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

import PropTypes from "prop-types";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ca5f32c0475db6a51a059994fe0fa41b";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonresponse = await response.json();
    let result = {
      city: jsonresponse.name,
      country: jsonresponse.sys.country,
      temperature: jsonresponse.main.temp,
      temperatureMin: jsonresponse.main.temp_min,
      temperatureMax: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelsLike: jsonresponse.main.feels_like,
      weather: jsonresponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch (error) {
      console.error("Error: ", error);
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>City not found on our API</p>}
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  updateInfo: PropTypes.func.isRequired,
};
