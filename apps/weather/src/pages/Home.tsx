import { useEffect, useState } from 'react';
import { WeatherData, fetchWeatherApi } from '@weather/api';
import { Footer, Header, WeatherSearch } from '../components';

export default function Home() {
  const [data, setData] = useState<WeatherData | undefined>();
  const [location, setLocation] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<WeatherData | undefined>();
  const [fetching, setFetching] = useState<boolean>();

  const fetchWeather = () => {
    console.log('fetching weather for', location);

    setError(undefined);
    setResponse(null);
    setFetching(true);

    fetchWeatherApi(location)
      .then((res) => {
        console.log(res);
        setResponse(res.data.name);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setFetching(false));
  };

  useEffect(fetchWeather, []);
  useEffect(fetchWeather, [location]);

  const onChangeLocation = (location: string) => {
    setLocation(location);
  };

  return (
    <div>
      <Header />
      <WeatherSearch onChangeLocation={onChangeLocation} />
      <Footer />
    </div>
  );
}
