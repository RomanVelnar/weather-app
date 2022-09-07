import { useEffect, useState } from "react";
import { WeatherData } from "@weather/api";
import { fetchWeatherApi } from "../../../../libs/api/src/lib/weatherApi/fetchWeatherApi"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WeatherSearch from "../components/WeatherSearch";

export default function Home() {
    const [data, setData] = useState<WeatherData | undefined>();
  const [location, setLocation] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<WeatherData | undefined>();
  const [fetching, setFetching] = useState<boolean>();

//   const fetchWeather = () => {
//             console.log("fetching weather for", city);
//             // do something with city
//             setFetching(true);
//             fetchWeatherApi(city)
//             .then(res => {
//                 console.log(res);
//                 setResponse(res.data.city.name);
//             })
//             .catch(error => {
//                 console.error(error);
//                 setError(error);
//             })
//             .finally(() => setFetching(false));
//         };
//     useEffect(fetchWeather, []);
//      useEffect(fetchWeather, [city]);
    
  useEffect(() => {
            fetchWeatherApi()
            .then((response) => {
              setData(response.data);
              console.log(response.data);
            })
            //TODO write the logic that display a div if the user entered the wrong city
            .catch((err) => {
              if (err.response) {
                setError(err);
                console.log(err);
              }
            })
            .finally(() => setFetching(false));
          setLocation('');
        }, [data]);
    
    return(
        <div>
            <Header />
            {/* <WeatherSearch /> */}
            <Footer />
        </div>
    )
}