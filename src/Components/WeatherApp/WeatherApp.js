import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
const WeatherApp = () => {
  let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

  const [icon, setIcon] = useState(cloud_icon);

  const [city, setCity] = useState("London");
  const [humidity, setHumidity] = useState("60");
  const [wind, setWind] = useState("19");
  const [temp, setTemp] = useState("24");
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(URL);
    let data = await response.json();

    setCity(data.name);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemp(data.main.temp);

    // const humidity = document.getElementsByClassName("humidity-percent");
    // const wind = document.getElementsByClassName("wind-percent");
    // const temp = document.getElementsByClassName("weather-temp");
    // const location = document.getElementsByClassName("weather-location");

    // humidity[0].innerHTML=  data.main.humidity + "%";
    // wind[0].innerHTML=  data.wind.speed+ "km/h";
    // temp[0].innerHTML=  data.main.temp+ "°c";
    // location[0].innerHTML=  data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon(snow_icon);
    } else {
      setIcon(clear_icon);
    }
  };
  return (
    <div className="container">
      <div className="top-nav">
        <input type="text" className="cityInput" placeholder="search city" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={icon} alt="" />
      </div>
      {!temp ? (
        <p>NO DaTa Found</p>
      ) : (
        <div className="weather-temp">{temp}°c</div>
      )}
      {!city ? (
        <p>NO DaTa Found</p>
      ) : (
        <div className="weather-location">{city}</div>
      )}
      <div className="weather-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            {!humidity ? (
              <p>NO DaTa Found</p>
            ) : (
              <div className="humidity-percent">{humidity}%</div>
            )}

            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            {!wind ? (
              <p>NO DaTa Found</p>
            ) : (
              <div className="wind-percent">{wind} km/h</div>
            )}
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
