import styled from 'styled-components';
import * as themeConf from '../../assets/Theme';


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e1ffee;
  background-color: ${themeConf.backgroundColor};
`;

export const SearchContainer = styled.div`
  margin: 2rem 0;
`;

export const SearchHeading = styled.h2``;

export const SearchBar = styled.form`
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 2rem;
`;

export const SearchButton = styled.button``;

export const ResultsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  text-align: center;
  background-color: #ffeeaf;
  color: #7fbcd2;
`;
export const ResultsTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -8rem;
`;

export const ResultsLocation = styled.div`
  font-size: 2rem;
  text-align: left;
`;

export const ResultsTemperature = styled.div`
  font-size: 4rem;
`;
export const ResultsDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transform: rotate(270deg);
  margin-right: -5rem;
`;

export const ResultsBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.1rem;
`;
export const ResultsFeels = styled.div`
  font-size: 1.1rem;
`;

export const ResultsHumidity = styled.div`
  font-size: 1.1rem;
`;

export const ResultsWind = styled.div`
  font-size: 1.1rem;
`;
