import axios from "axios";

const temperature_unit = 'metric';
const api_key = `6026f341a67b8cf7259f31b17578ea61`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${temperature_unit}&appid=${api_key}`;

export const fetchWeatherApi = async () => await axios(url);

console.log(fetchWeatherApi);