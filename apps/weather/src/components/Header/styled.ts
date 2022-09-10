import styled from "styled-components"
import * as themeConf from '../../assets/Theme';

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1rem;
    background-color: ${themeConf.containerBackgroundColor};
`
export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
`
export const ThemeSwitch = styled.button`
    background-color: #555555;
    border: none;
    color: white;
    padding: 0.3rem 0.6rem;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 1rem;

`