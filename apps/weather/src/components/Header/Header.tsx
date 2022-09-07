import styled from "styled-components"

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const HeaderTitle = styled.h1`
    font-size: 4rem;
`
const ThemeSwitch = styled.button`
    background-color: #555555;
    border: none;
    color: white;
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
`

export default function Header() {
    return(
        <HeaderContainer>
            <HeaderTitle>Weather App</HeaderTitle>
            <ThemeSwitch>toggle theme</ThemeSwitch>
        </HeaderContainer>
    )
}