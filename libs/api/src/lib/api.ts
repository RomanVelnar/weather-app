import axios, { AxiosResponse } from "axios";
import { WeatherData } from './dataTypes/apiTypes';

// const temperature_unit = 'metric';
const api_key = `6026f341a67b8cf7259f31b17578ea61`;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;


export const fetchWeatherApi = async (location: string): Promise<AxiosResponse<WeatherData, any>> => await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`);


