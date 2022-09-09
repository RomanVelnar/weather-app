import axios, { AxiosResponse } from "axios";
import { WeatherData } from './dataTypes/apiTypes';

// const temperature_unit = 'metric';
const api_key = `beb8fab531c3fd03b5d7a1171b0a77ff`;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;


export const fetchWeatherApi = async (location: string): Promise<AxiosResponse<WeatherData, any>> => await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`);


