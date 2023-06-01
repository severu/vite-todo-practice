import React, { useEffect, useState } from "react";
import "./Weather.modules.scss";
import axios, { Axios } from "axios";

function Weather() {
  const [location, setLocation] = useState();
  const [wdata, setWdata] = useState([]);
  const [celcius, setCelcius] = useState();
  const [iconCode, setIconCode] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f265ed7c7acbde47154b1aea003bc802`;

  useEffect(() => {
    getLocation();
    getWeather();

    //return () => clearInterval(interval)
  }, [location, celcius]);

  const getLocation = async () => {
    const city = await axios.get("https://ipapi.co/city/");
    setLocation(city.data);
    console.log(city);
  };

  const getWeather = () => {
    axios.get(url).then((response) => {
      setIconCode(response.data.weather[0].icon)
      setWdata(response.data);
      const kelvin = response.data.main.temp;
      const celc = kelvin - 273.15;
      setCelcius(Math.round(celc));
      console.log(response.data);
      console.log("time");
    });
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__city">{location}</div>
        {wdata.main ? (
          <div className="header__container__temp">
            <span className="header__container__temp__celcius">{celcius}</span>&deg;
            <span className="header__container__temp__sign">C</span>
          </div>
        ) : null}
        {wdata.weather ? (
          <div className="header__container__weather">{wdata.weather[0].main}</div>
        ) : null}
      </div>
      <div className="header__icon">
        <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} />
      </div>
    </div>
  );
}

export default Weather;
