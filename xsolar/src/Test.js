import React, { useState } from 'react';

import Header from './Header';

// *** React ***
// Componente: Bloco isolado de HTML, CSS e JS. Nao interfere no resto da aplicacao.
// Propriedade: Atributos. Informacao que um componente PAI passa para o componente FILHO
// Estado: Informacoes mantidas pelo componente (Imutavel)

// Componente App
function Test() {
  const [counter, setCounter] = useState(0);

  function IncrementCounter(){
    setCounter(counter + 1);
  }


  return (
    
    //Propriedade title
    <>
      <h1><center>Hello World</center></h1>
      <Header title="Dashboard" />
      <h3>Contador: {counter}</h3>
      <button onClick={ IncrementCounter }>Incrementar</button>
      <Header title="Title 1" />
      <Header title="Title 2" />
      <Header title="Title 3" />
    </>
  );
}

export default Test;
