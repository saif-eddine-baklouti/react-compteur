import './Compteur.css';
import { useState } from 'react';


    
function Compteur(props) {
        
    //console.log(props)

  const [compteur, setCompteur ] = useState(props.valueInit)

  function decr() {
    console.log("-")
    //setCompteur( compteur - 1)
    setCompteur( (actuelle) => actuelle - 1)
    props.handleTotal(-1);
}
function incr() {
    console.log("+")
    //setCompteur( compteur + 1)
    //setCompteur( (actuelle) => actuelle + 1)
    //setCompteur( (actuelle) => actuelle + 1)
    setCompteur( (actuelle) => actuelle + 1)
    props.handleTotal(1);
    
}
function reinit() {
    //console.log("reinit")
    setCompteur(0)
    props.handleTotal(-compteur);
    
  }


  return (
    <div className="compteur">


      
      <div>
        <p>{compteur}</p>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button>
        <button onClick={reinit}>Rénitialiser</button>
      </div>
    </div>
  );
}

export default Compteur;
