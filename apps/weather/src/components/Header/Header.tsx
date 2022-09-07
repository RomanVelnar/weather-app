import {
    HeaderContainer, HeaderTitle, ThemeSwitch,
} from "./styled"

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Weather App</HeaderTitle>
      <ThemeSwitch>toggle theme</ThemeSwitch>
    </HeaderContainer>
  );
}
