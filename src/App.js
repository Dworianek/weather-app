import "./App.css";
import { useState, useEffect } from "react";

import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";

const style = { fontSize: "60px", color: "#ffffff" };

function App() {
  const [weather, setWeather] = useState({});

  const [city, setCity] = useState("Poręba");

  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2ee1aa6d12ead49998035fd8f3c426f5`
    )
      .then((resposne) => resposne.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      });
  }, [buttonClick]);

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);

    var hour = a.getHours();

    var min = a.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }

    var sec = a.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`;
    }

    var time = hour + ":" + min + ":" + sec;
    return time;
  }

  return (
    <div className="weatherPanel">
      <div className="weatherApp">
        <div className="cityForm">
          <input
            type="text"
            name=""
            placeholder="Podaj swoje miasto"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={() => setButtonClick(!buttonClick)}>Wyszukaj</button>
        </div>
        <p className="cityText"> {`${weather?.name}`}</p>
        {/* <p className="weatherDescText"> {`${weather?.weather[0]?.main}`}</p> */}
        <p className="tempText"> {`${Math.floor(weather?.main?.temp)}°C`}</p>
        <div className="componentWeather">
          <div className="element">
            <p>{`${weather?.main?.pressure} hPa`}</p>
            <h4>{`Ciśnienie`}</h4>
          </div>

          <div className="element">
            <p>{`${weather?.main?.humidity} g/m³`}</p>
            <h4>{`Wilgotność`}</h4>
          </div>
          <div className="element">
            <p>{`${weather?.wind?.speed} m/s`}</p>
            <h4>{`Prędkość wiatru`}</h4>
          </div>
        </div>
        <div className="sunStatus">
          <div className="element">
            <BsSunrise style={style} />
            <p>{timeConverter(weather?.sys?.sunrise)}</p>
            <h4>{`Wschód słońca`}</h4>
          </div>
          <div className="element">
            <BsSunset style={style} />
            <p>{timeConverter(weather?.sys?.sunset)}</p>
            <h4>{`Zachód słońca`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
