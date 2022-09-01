import React, { useState, useEffect } from "react";
import { fetchWeatherApi } from "../api/fetchWeatherApi";

const cities: string[] = ["london", "paris", "new york"];

export default function DisplayCity() {    

    const [city, setCity] = useState(cities[0]);
    const [fetching, setFetching] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState<string | null>(null);
    const [lat, setLat] = useState<any>([]);
    const [long, setLong] = useState<any>([]);

    const fetchWeather = () => {
        console.log("fetching weather for", city);
        // do something with city
        setFetching(true);
        fetchWeatherApi(city)
        .then(res => {
            console.log(res);
            setResponse(res.data.city.name);
        })
        .catch(error => {
            console.error(error);
            setError(error);
        })
        .finally(() => setFetching(false));
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude)
        });

        console.log("latitude is:", lat)
        console.log("longitude is:", long)

    }, [lat, long])
    
    useEffect(fetchWeather, []);
    useEffect(fetchWeather, [city]);
    return(
        <div>
            {fetching && <div>"Please Wait, fetching from api"</div>}
            {response && <div>{response}</div>}
        </div>
    )
}