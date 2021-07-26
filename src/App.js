import React, { useState, useEffect } from  'react';
import styled from 'styled-components';
import Frase from './components/Frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
  transition: background-size: .8s ease;
  &:hover {
    cursor: pointer;
    background-size: 400;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;

`;

function App() {

  // state de frases
  const [ frase, guardarFrase] = useState({});



  const consultarAPI = async () => { 
    const api = await fetch('https://breakingbadapi.com/api/quotes');
    const frase =  await api.json();
    console.log(frase);
    guardarFrase(frase[num(1, frase.length)]);
  }

  const num = (max, min) => (
    Math.floor((Math.random() * (max-min+1)) + min)
  )

  
  // Cargar un frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={() => consultarAPI()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
