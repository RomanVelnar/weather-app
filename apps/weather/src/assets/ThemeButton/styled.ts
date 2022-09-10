import styled from 'styled-components';
import * as themeConf from '../../assets/Theme';

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