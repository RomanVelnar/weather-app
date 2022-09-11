import { ToggleButton } from "../../assets/ThemeButton";
import {
    HeaderContainer, HeaderTitle, ThemeSwitch,
} from "./styled"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Weather App</HeaderTitle>
      <ToggleButton />
    </HeaderContainer>
  );
}

//TODO useContext hook to change the theme https://reactjs.org/docs/hooks-reference.html#usecontext

