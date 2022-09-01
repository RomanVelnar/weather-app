import React, {useState, useEffect} from "react";

function Weather() {


const [apiData, setApiData] = useState({});
const [getState, setGetState] = useState('');
const [state, setState] = useState('');

// API KEY AND URL
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a02c7f7639ade982a61f32c928f76c34`;

// Side effect
useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event: any) => {
    setGetState(event.target.value);
  };
  
  const submitHandler = () => {
    setState(getState);
  };
  
  const kelvinToFarenheit = (k: number) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="App">
      <input 
        onChange={inputHandler}
        value={getState}
      />
    </div>
  );
}

export default Weather;