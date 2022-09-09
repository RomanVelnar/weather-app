// import { useEffect, useState } from 'react';

// export function WeatherGeoPosition() {
//   const [lat, setLat] = useState<any>([]);
//   const [long, setLong] = useState<any>([]);
//   const [weatherData, setWeatherData] = useState<any>([]);
//   const [forecast, setForecast] = useState<any>([]);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     getWeather(lat, long)
//       .then((weather) => {
//         setWeatherData(weather);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//       });

//     getForecast(lat, long)
//       .then((data) => {
//         setForecast(data);
//         setError(null);
//       })
//       .catch(err => {
//         setError(err.message);
//       })
//   }, [lat, long, error]);

//   function handleResponse(response: any) {
//     if(response.ok) {
//         return response.json();
//     } else {
//         throw new Error("Please enable your Location in your browser")
//     }
//   }

//   function getWeather(lat: any, long: any) {
//     return fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6026f341a67b8cf7259f31b17578ea61`
//     )
//       .then(res => handleResponse(res))
//       .then(weather => {
//         if (Object.entries(weather).length) {
//           const mappedData = mapDataToWeatherInterface(weather);
//           return mappedData;
//         }
//         return null
//       });
//   }

//   function getForecast(lat: any, long: any) {
//     return fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6026f341a67b8cf7259f31b17578ea61`
//     )
//       .then(res => handleResponse(res))
//       .then(forecastData => {
//         if (Object.entries(forecastData).length) {
//           return forecastData.list
//             .filter((forecast: any) => forecast.dt_txt.match(/09:00:00/))
//             .map(mapDataToWeatherInterface);
//         }
//       });
//   }

// //   function mapDataToWeatherInterface(data: any) {
// //     const mapped = {
// //       date: data.dt * 1000, // convert from seconds to milliseconds
// //       description: data.weather[0].main,
// //       temperature: Math.round(data.main.temp),
// //     };
  
// //     // Add extra properties for the five day forecast: dt_txt, icon, min, max
// //     if (data.dt_txt) {
// //       mapped.dt_txt = data.dt_txt;
// //     }
// //     return mapped;
// //   }

//   return (
//     <div>
//         <div>{weatherData}</div>
//         <div>{forecast}</div>
        
//     </div>
//   );
// }
