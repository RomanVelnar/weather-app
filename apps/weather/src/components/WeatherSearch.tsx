import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #E1FFEE;

`

const SearchContainer = styled.div`
    margin: 2rem 0;
`

const SearchHeading = styled.h2`

`
const SearchBar = styled.input`
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 2rem;

`

const SearchButton = styled.button`

`

const ResultsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    text-align: center;
    background-color: #FFEEAF;
    color: #7FBCD2;
`
const ResultsTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -8rem;
`

const ResultsLocation = styled.div`
    font-size: 2rem;
    text-align: left;
`

const ResultsTemperature = styled.div`
    font-size: 4rem;
`
const ResultsDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transform: rotate(270deg);
    margin-right: -5rem;
`

const ResultsBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.1rem;
`
const ResultsFeels = styled.div`
    font-size: 1.1rem;
`

const ResultsHumidity = styled.div`
    font-size: 1.1rem;
`

const ResultsWind = styled.div`
    font-size: 1.1rem;
`

export default function WeatherSearch() {
  const [data, setData] = useState<any>({}); //TODO Ask Barry about the TS type here, alternative to "any"
  const [location, setLocation] = useState<string>('');

  const api_key = `6026f341a67b8cf7259f31b17578ea61`; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
  
  const searchLocation = (event: any) => { //TODO use useEffect to wrap the fetch function
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  //TODO write the handleSearch function for the SearchButton

  console.log(data.main)

  return (
    <Container>
      <SearchContainer>
        <SearchHeading>Discover the weather around the world:</SearchHeading>
        <SearchBar
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" 
        />
        {/* <SearchButton onClick={() => handleSearch()} /> */}
      </SearchContainer>
      <ResultsCard>
          <ResultsLocation>
            <p>{data.name}</p>
          </ResultsLocation>
        <ResultsTop>
          <ResultsTemperature>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </ResultsTemperature>
            {/* //TODO if statement that changes the description to a picture or changes whole background */}
          <ResultsDescription>
            {data.weather ? <p>{data.weather[0].main}</p> : null}   
          </ResultsDescription>
        </ResultsTop>

        {data.name !== undefined &&
          <ResultsBottom>
            <ResultsFeels>
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </ResultsFeels>
            <ResultsHumidity>
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </ResultsHumidity>
            <ResultsWind>
              {data.wind ? <p>{data.wind.speed.toFixed()} km/h</p> : null}
              <p>Wind Speed</p>
            </ResultsWind>
          </ResultsBottom>
        }
      </ResultsCard>
    </Container>
  );
}