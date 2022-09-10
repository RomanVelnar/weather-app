import { ThemeContext } from '@weather/api';
import { useContext, useState, createContext } from 'react';

const defaultMode = 'dark';

export const ManageThemeContext: React.Context<ThemeContext> = createContext({
  mode: defaultMode,
  toggle: () => { }
});

export const useTheme = () => useContext(ManageThemeContext);

export const ThemeManager = ({ children }: any) => {

  const [themeState, setThemeState] = useState({
    mode: defaultMode
  });

  const toggle = (): void => {
    setThemeState({ mode: (themeState.mode === 'light' ? `dark` : `light`) });
  }

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {children}
    </ManageThemeContext.Provider>
  );
}