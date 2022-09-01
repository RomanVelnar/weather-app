import { useState } from 'react';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import axios from 'axios';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {

  function getApiData() {
    
    const apiCall = async () => {
        // e.preventDefault()
        const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={a02c7f7639ade982a61f32c928f76c34}`;
        const req = axios.get(url);
        const res = await req;

        console.log(apiCall)
    }
}


  return (
    <StyledApp>
      <NxWelcome title="weather" />
    </StyledApp>
  );
}

export default App;
