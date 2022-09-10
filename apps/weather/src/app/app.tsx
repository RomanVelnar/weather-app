import styled, { ThemeProvider } from 'styled-components';
import { ThemeManager, useTheme } from '../utils/ThemeManager';
import * as themeConf from '../utils/theme';
import Home from '../pages/Home';
import GlobalStyle from '../utils/GlobalStyle'

const App: React.FC = () => {
  // const theme = useTheme();

  return (
    <ThemeManager>
      <GlobalStyle />
        <Home />
    </ThemeManager>
  );
};

export default App;
