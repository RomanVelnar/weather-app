import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a5f1e9;
  padding: 1rem 4rem;
`;

const FooterTitle = styled.h2`
  font-size: 1rem;
`;

const FooterLink = styled.a``;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Weather App</FooterTitle>
      <FooterLink href="https://github.com/RomanVelnar/weather-app">
        Github
      </FooterLink>
    </FooterContainer>
  );
}
