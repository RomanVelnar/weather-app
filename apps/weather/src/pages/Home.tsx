import { useEffect, useState } from 'react';
import { WeatherData, fetchWeatherApi } from '@weather/api';
import { Footer, Header, WeatherSearch, SearchForm, WeatherDisplay } from '../components';
import { DebounceInput } from 'react-debounce-input';

export default function Home() {
  const [data, setData] = useState<WeatherData | undefined>();
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<WeatherData | undefined>();
  const [fetching, setFetching] = useState<boolean>();

  const fetchWeather = () => {
    console.log('fetching weather for', location);
    if(!location && !data){
        return;
    }
    // setData(undefined);
    // setError(undefined);
    // setResponse(null);
    setFetching(true);

    fetchWeatherApi(location)
      .then((res) => {
        // console.log(res);
        setData(res.data);
        // setResponse(res.data.name);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setFetching(false));
  };
//   console.log(data)

  useEffect(fetchWeather, []);
  useEffect(fetchWeather, [location]);

  const onSearchInput = (e: any) => {
    setLocation(e.target.value);
  }

//   console.log(data)

  return (
    <div>
      <Header />
      <form>
          <label htmlFor="location-search">
            <span>Enter location</span>
          </label>
          <DebounceInput 
            type='text'
            id='location-search'
            placeholder='Search for locations'
            name='search'
            minLength={2}
            debounceTimeout={500}
            onChange={onSearchInput}
          />
        </form>
      <SearchForm onSearchInput={location} />
      <WeatherDisplay weatherData={data} />
      <Footer />
    </div>
  );
}
