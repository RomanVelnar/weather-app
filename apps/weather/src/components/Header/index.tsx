import {
    HeaderContainer, HeaderTitle, ThemeSwitch,
} from "./styled"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Weather App</HeaderTitle>
      <ThemeSwitch>toggle theme</ThemeSwitch>
    </HeaderContainer>
  );
}
