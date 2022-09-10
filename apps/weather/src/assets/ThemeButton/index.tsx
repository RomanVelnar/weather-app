import { useTheme } from '../../assets/ThemeManager';
import { Button } from './styled'

export function ThemeButton() {
    const theme = useTheme();

    return(
        <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark'
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </Button>
    )
}