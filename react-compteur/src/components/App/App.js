import { useState } from 'react';
import Compteur from '../Compteur/Compteur.js';
import Header from '../Header/Header.js';
import './App.css';



function App() {
  const arrInits = [0, 3, 0, 5, 0];
  const [total, setTotal] = useState(arrInits.reduce((a, b) => a + b, 0))

  console.log(total)

  function totalC(valuecompt) {
    setTotal((totalAct) => totalAct + valuecompt);

    //console.log(total)
  }


  const compteurs = arrInits.map(( valueInit, index) => {
    return <Compteur key={index} valueInit={valueInit} handleTotal={totalC} /> 
  });


  return (
    <>
    <Header/>
    <main>
        {compteurs}
        
    </main>
    </>

  );
}

export default App;
