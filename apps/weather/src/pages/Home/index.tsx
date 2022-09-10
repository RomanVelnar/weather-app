import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../assets/ThemeManager';

import { useEffect, useState } from 'react';
import { WeatherData, fetchWeatherApi } from '@weather/api';
import {
  Footer,
  Header,
  WeatherDisplay,
} from '../../components';
import { Wrapper, Button, LocationSearch } from './styled';

import { DebounceInput } from 'react-debounce-input';

export default function Home() {
  const [data, setData] = useState<WeatherData | undefined>();
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<WeatherData | undefined>();
  const [fetching, setFetching] = useState<boolean>();

  const fetchWeather = () => {
    console.log('fetching weather for', location);
    if (!location && !data) {
      return;
    }
    setData(undefined);
    setError(undefined);
    setFetching(true);

    fetchWeatherApi(location)
      .then((res) => {
        // console.log(res);
        setData(res.data);
        console.log(data);
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
  };

  //   console.log(data)
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
          <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark'
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </Button>
          <Header />
          <LocationSearch>
            <label htmlFor="location-search">
              <span>Enter location</span>
            </label>
            <DebounceInput
              type="text"
              id="location-search"
              placeholder="Search for locations"
              minLength={2}
              debounceTimeout={500}
              onChange={onSearchInput}
              autoFocus
            />
          </LocationSearch>
          <WeatherDisplay weatherData={data} />
          <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
