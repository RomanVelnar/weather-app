import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { fetchWeatherApi } from '../api/fetchWeatherApi';


const StyledApp = styled.div`
  // Your style here
`;

const cities: string[] = ["london", "paris", "new york"];

export function App() {
  const [city, setCity] = useState(cities[0]);
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState<string | null>(null);

  const fetchWeather = () => {
    console.log("fetching weather for", city);
    // do something with city
    setFetching(true);
    fetchWeatherApi(city)
      .then(res => {
        console.log(res);
        setResponse(res.data.city.name);
      })
      .catch(error => {
        console.error(error);
        setError(error);
      })
      .finally(() => setFetching(false));
  };

  useEffect(fetchWeather, []);
  useEffect(fetchWeather, [city]);

  return (
    <StyledApp>
      {fetching && <div>"Please Wait, fetching from api"</div>}
      <NxWelcome title={`to ${city}`} />
      {response && <div>{response}</div>}
    </StyledApp>
  );
}

export default App;
