import styled from 'styled-components';
import Home from '../pages/Home';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export function App() {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  );
}

export default App;
