import React, { useState, useEffect } from "react";
import { fetchWeatherApi } from "../api/fetchWeatherApi";
import styled from "styled-components";

// const Weather = styled.div`
// `

export default function DisplayOnLocation() {
    const [lat, setLat] = useState<any>([]);
    const [long, setLong] = useState<any>([]);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`{fetchWeatherApi}/weather/?lat=${lat}&lon=${long}&units=metric&APPID={fetchWeatherApi}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result)
                });
        }
        fetchData();

    }, [lat, long])
    
    return(
        <div>
            {data}
        </div>
    )
}