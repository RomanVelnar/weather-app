import styled from "styled-components"
import * as themeConf from '../../assets/Theme';

export const HeaderContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${themeConf.backgroundColor};
`
export const HeaderTitle = styled.h1`
    font-size: 4rem;
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