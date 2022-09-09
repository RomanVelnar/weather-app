import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from '../utils/ThemeManager';
import * as themeConf from '../utils/theme';
import Home from '../pages/Home';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Button = styled.button`
  background: ${themeConf.buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${themeConf.buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
        <StyledApp>
          <Home />
          <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark'
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </Button>
        </StyledApp>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
