import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import DisplayCity from '../components/DisplayCity'


const StyledApp = styled.div`
  // Your style here
`;


export function App() {

  return (
    <StyledApp>
      <NxWelcome title="weather" />
      <DisplayCity />
    </StyledApp>
  );
}

export default App;
