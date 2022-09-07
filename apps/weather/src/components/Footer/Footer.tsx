import styled from "styled-components"

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const FooterTitle = styled.h2`
    font-size: 3rem;
`

const FooterLink = styled.a`
`

export default function Footer() {
    return(
        <FooterContainer>
            <FooterTitle>Weather App</FooterTitle>
            <FooterLink href="https://github.com/RomanVelnar/weather-app">Github</FooterLink>
        </FooterContainer>
    )
}