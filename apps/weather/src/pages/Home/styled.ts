import styled from 'styled-components';
import * as themeConf from '../../assets/Theme';

export const Wrapper = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  text-align: center;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`;

export const Button = styled.button`
  background: ${themeConf.buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${themeConf.buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

export const LocationSearch = styled.form`
    width: 40vw;
    background-color: ${themeConf.backgroundColor};
    padding: 1rem;

`

export const SearchInput = styled.input`
  font-size: 2rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-radius: 20px;
`
