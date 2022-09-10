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


export function WeatherDisplay({weatherData}: any) {

    return(
        <Container>
                {weatherData?.main && (
            <ResultsCard>
                <ResultsLocation>
                    <p>{weatherData.name}</p>
                </ResultsLocation>
                <ResultsTop>
                    <ResultsTemperature>
                        <h1>{weatherData.main.temp.toFixed()}°C</h1>
                    </ResultsTemperature>
                    {/* //TODO if statement that changes the description to a picture or changes whole background */}
                    {!!weatherData.weather?.length && (
                    <ResultsDescription>
                        <p>{weatherData.weather[0].main}</p>
                    </ResultsDescription>
                    )}
                </ResultsTop>

                <ResultsBottom>
                    <ResultsFeels>
                        <p>{weatherData.main.feels_like.toFixed()}°C</p>
                        <p>Feels Like</p>
                    </ResultsFeels>

                    <ResultsHumidity>
                        <p>{weatherData.main.humidity}%</p>
                        <p>Humidity</p>
                    </ResultsHumidity>

                    <ResultsWind>
                        <p>{weatherData.wind.speed.toFixed()} km/h</p>
                        <p>Wind Speed</p>
                    </ResultsWind>
                </ResultsBottom>
            </ResultsCard>
    )
}
    </Container>
    )
}