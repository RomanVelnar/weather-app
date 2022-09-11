import { 
    Container, 
    ResultsCard, 
    ResultsLocation, 
    ResultsTop, 
    ResultsTemperature, 
    ResultsDescription, 
    ResultsBottom,
    ResultsBottomComp} from "./styled";

import tempFeels from '../../assets/images/tempFeels.png';
import humidity from '../../assets/images/humidity.png'
import wind from '../../assets/images/wind.png'



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
                    <img
                        src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        alt="weather status icon"
                        height="200px"
                    />
                    {!!weatherData.weather?.length && (
                    <ResultsDescription>
                        <p>{weatherData.weather[0].main}</p>
                    </ResultsDescription>
                    )}
                </ResultsTop>

                <ResultsBottom>
                    <ResultsBottomComp>
                        <div>
                            <p>{weatherData.main.feels_like.toFixed()}°C</p> 
                            <p>Feels Like</p>
                        </div>
                        <img src={tempFeels} alt="" height="30px" />
                    </ResultsBottomComp>

                    <ResultsBottomComp>
                        <div>
                            <p>{weatherData.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <img src={humidity} alt="" height="30px" />
                    </ResultsBottomComp>

                    <ResultsBottomComp>
                        <div>
                            <p>{weatherData.wind.speed.toFixed()} km/h</p>
                            <p>Wind Speed</p>
                        </div>
                        <img src={wind} alt="" height="30px" />
                    </ResultsBottomComp>
                </ResultsBottom>
            </ResultsCard>
    )
}
    </Container>
    )
}