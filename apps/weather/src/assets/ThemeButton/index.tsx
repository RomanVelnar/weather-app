import { ChangeEvent, useState } from 'react';
import theme from 'styled-theming';
import { useTheme } from '../../assets/ThemeManager';
import { Button, Label, Input, Switch } from './styled'

export function ThemeButton() {
    const theme = useTheme();

    return(
        <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark'
             ? "☼" : "☾"}
          </Button>
    )
}

export function ToggleButton() {
    const theme = useTheme()
        const [checked, setChecked] = useState<any>(false);
      
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          setChecked(e.target.checked);
        };
            return (
              <Label>
                <span>{checked ? "light mode" : "dark mode"}</span>
                <Input checked={checked} type="checkbox" onChange={() => theme.toggle()} />
                <Switch />
              </Label>
            );
          };