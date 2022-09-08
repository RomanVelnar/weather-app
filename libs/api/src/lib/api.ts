import axios, { AxiosResponse } from "axios";
import { WeatherData } from './dataTypes/apiTypes';

const temperature_unit = 'metric';
const api_key = `35b7bbc28f6f8746b3446549a0dbe59a`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${temperature_unit}&appid=${api_key}`;

export const fetchWeatherApi = async (location: string): Promise<AxiosResponse<WeatherData, any>> => await axios(url);
