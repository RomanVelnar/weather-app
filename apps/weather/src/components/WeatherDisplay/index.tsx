import Home from "../../pages/Home"
import { WeatherData } from "@weather/api"
import { 
    Container, 
    ResultsCard, 
    ResultsLocation, 
    ResultsTop, 
    ResultsTemperature, 
    ResultsDescription, 
    ResultsBottom, 
    ResultsFeels, 
    ResultsHumidity, 
    ResultsWind } from "./styled"


export function WeatherDisplay(props: any) {
    return(
        <Container>
                {props.weatherData?.main && (
            <ResultsCard>
                <ResultsLocation>
                    <p>{props.weatherData.name}</p>
                </ResultsLocation>
                <ResultsTop>
                    {props.weatherData.main && (
                    <ResultsTemperature>
                        <h1>{props.weatherData.main.temp.toFixed()}°C</h1>
                    </ResultsTemperature>
                    )}
                    {/* //TODO if statement that changes the description to a picture or changes whole background */}
                    {!!props.weatherData.weather?.length && (
                    <ResultsDescription>
                        <p>{props.weatherData.weather[0].main}</p>
                    </ResultsDescription>
                    )}
                </ResultsTop>

                <ResultsBottom>
                    {props.weatherData.main && (
                    <ResultsFeels>
                        <p>{props.weatherData.main.feels_like.toFixed()}°C</p>
                        <p>Feels Like</p>
                    </ResultsFeels>
                    )}

                    {props.weatherData.main && (
                    <ResultsHumidity>
                        <p>{props.weatherData.main.humidity}%</p>
                        <p>Humidity</p>
                    </ResultsHumidity>
                    )}

                    {props.weatherData.main && (
                    <ResultsWind>
                        <p>{props.weatherData.wind.speed.toFixed()} km/h</p>
                        <p>Wind Speed</p>
                    </ResultsWind>
                    )}
                </ResultsBottom>
            </ResultsCard>
    )
}
    </Container>
    )
}