import styled from 'styled-components';
import * as themeConf from '../../assets/Theme';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeConf.backgroundColor};
  padding: 1rem 4rem;
`;

export const FooterTitle = styled.h2`
  font-size: 1rem;
`;

export const FooterLink = styled.a`
  font-size: 1rem;
`;
