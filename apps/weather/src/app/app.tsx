import { ThemeManager, useTheme } from '../assets/ThemeManager';
import Home from '../pages/Home';
import GlobalStyle from '../assets/GlobalStyle'

const App: React.FC = () => {

  return (
    <ThemeManager>
      <GlobalStyle />
        <Home />
    </ThemeManager>
  );
};

export default App;
