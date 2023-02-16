import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Zawiercie&units=metric&appid=2ee1aa6d12ead49998035fd8f3c426f5"
    )
      .then((ressposne) => ressposne.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="weatherApp">
      <div className="cityForm">
        <input type="text" name="" id="Your City" />
        <button>Wyszukaj</button>
      </div>
      <p>Nazwa miasta : {`Poręba`}</p>
      <p>Temperatura : {`2 °C`} </p>
    </div>
  );
}

export default App;
