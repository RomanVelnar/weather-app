import { ThemeManager, useTheme } from '../assets/ThemeManager';
import Home from '../pages/Home';
import GlobalStyle from '../assets/GlobalStyle';
import { ContainerWrapper } from './styled';

const App: React.FC = () => {
  return (
    <ThemeManager>
      <ContainerWrapper>
        <GlobalStyle />
        <Home />
      </ContainerWrapper>
    </ThemeManager>
  );
};

export default App;
