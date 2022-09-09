import styled, { ThemeProvider } from 'styled-components';
import { ThemeManager, useTheme } from '../utils/ThemeManager';
import * as themeConf from '../utils/theme';
import Home from '../pages/Home';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeManager>
      <StyledApp>
        <Home />
      </StyledApp>
    </ThemeManager>
  );
};

export default App;
