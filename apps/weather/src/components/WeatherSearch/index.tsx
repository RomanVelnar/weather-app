import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WeatherData } from '@weather/api';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e1ffee;
`;

const SearchContainer = styled.div`
  margin: 2rem 0;
`;

const SearchHeading = styled.h2``;
const SearchBar = styled.form`
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 2rem;
`;

const SearchButton = styled.button``;

const ResultsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  text-align: center;
  background-color: #ffeeaf;
  color: #7fbcd2;
`;
const ResultsTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -8rem;
`;

const ResultsLocation = styled.div`
  font-size: 2rem;
  text-align: left;
`;

const ResultsTemperature = styled.div`
  font-size: 4rem;
`;
const ResultsDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: rotate(270deg);
  margin-right: -5rem;
`;

const ResultsBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.1rem;
`;
const ResultsFeels = styled.div`
  font-size: 1.1rem;
`;

const ResultsHumidity = styled.div`
  font-size: 1.1rem;
`;

const ResultsWind = styled.div`
  font-size: 1.1rem;
`;

export interface IWeatherSearchProps {
  onChangeLocation: (location: string) => void;
}

export function WeatherSearch() {
  const [data, setData] = useState<WeatherData | undefined>();
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<WeatherData | undefined>();
  const [fetching, setFetching] = useState<boolean>();

  // const temperature_unit = 'metric';
  // const api_key = `6026f341a67b8cf7259f31b17578ea61`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${temperature_unit}&appid=${api_key}`;

  //TODO write the handleSearch function for the SearchButton
  // const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'enter') {
  //     console.log(location)
  //     onChangeLocation(location);
  //   }
  // };

  // const onSearchInput = (e: any) => {
  //   setLocation(e.target.value)
  // }

  return (
    <Container>
      <SearchContainer>
        <SearchHeading>Discover the weather around the world:</SearchHeading>
        {/* <form>
          <label htmlFor="location-search">
            <span>Enter location</span>
          </label>
          <input 
            type='text'
            id='location-search'
            placeholder='Search for locations'
            name='search'
            onChange={onSearchInput}
          />
          <button type='submit'>Search</button>
        </form> */}
        
        {/* <SearchBar
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Enter Location"
          type="text"
        /> */}
        {/* <SearchButton onClick={() => handleSearch()} /> */}
      </SearchContainer>

      {/* {!data && <ResultsCard>No Cities selected</ResultsCard>} */}

      {error ? <div>There is no city with this name</div> : null}

      {data?.main && (
        <ResultsCard>
          <ResultsLocation>
            <p>{data.name}</p>
          </ResultsLocation>
          <ResultsTop>
            {data.main && (
              <ResultsTemperature>
                <h1>{data.main.temp.toFixed()}°C</h1>
              </ResultsTemperature>
            )}
            {/* //TODO if statement that changes the description to a picture or changes whole background */}
            {!!data.weather?.length && (
              <ResultsDescription>
                <p>{data.weather[0].main}</p>
              </ResultsDescription>
            )}
          </ResultsTop>

          <ResultsBottom>
            {data.main && (
              <ResultsFeels>
                <p>{data.main.feels_like.toFixed()}°C</p>
                <p>Feels Like</p>
              </ResultsFeels>
            )}

            {data.main && (
              <ResultsHumidity>
                <p className="bold">{data.main.humidity}%</p>
                <p>Humidity</p>
              </ResultsHumidity>
            )}

            {data.main && (
              <ResultsWind>
                <p className="bold">{data.wind.speed.toFixed()} km/h</p>
                <p>Wind Speed</p>
              </ResultsWind>
            )}
          </ResultsBottom>
        </ResultsCard>
      )}
    </Container>
  );
}
