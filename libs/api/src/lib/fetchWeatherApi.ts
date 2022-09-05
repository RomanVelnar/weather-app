import axios from "axios";
  
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a02c7f7639ade982a61f32c928f76c34';

export const fetchWeatherApi = async (city: string) => await axios(url);