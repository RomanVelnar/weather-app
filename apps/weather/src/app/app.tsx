import styled from 'styled-components';
import WeatherSearch from '../components/WeatherSearch';
import NxWelcome from './nx-welcome';
// import DisplayCity from '../components/DisplayCity'
// import DisplayOnLocation from '../components/DisplayOnLocation';
// import Weather from "../components/Weather"


const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export function App() {

  return (
    <StyledApp>
      {/* <NxWelcome title="weather" /> */}
      {/* <DisplayCity />
      <DisplayOnLocation /> */}
      {/* <Weather /> */}
      <WeatherSearch />
    </StyledApp>
  );
}

export default App;
