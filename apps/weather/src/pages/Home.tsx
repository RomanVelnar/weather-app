import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from '../utils/ThemeManager';
import * as themeConf from '../utils/theme';

import { useEffect, useState } from 'react';
import { WeatherData, fetchWeatherApi } from '@weather/api';
import {
  Footer,
  Header,
  WeatherSearch,
  SearchForm,
  WeatherDisplay,
} from '../components';
import { DebounceInput } from 'react-debounce-input';

const Wrapper = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Button = styled.button`
  background: ${themeConf.buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${themeConf.buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

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
        <div>
          <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark'
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </Button>
          <Header />
          <form>
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
          </form>
          {/* <SearchForm onSearchInput={location} /> */}
          <WeatherDisplay weatherData={data} />
          <Footer />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}
