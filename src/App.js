import './App.css';
import React, {useState} from 'react';
import Card from './Card';
import html2canvas from 'html2canvas';

function App() {
  const [lname, setlname] = useState('');
  const [Adjetivo, setAdjetivo] = useState('');
  const [action1, setAction1] = useState('');
  const [cosa1, setCosa1] = useState('');
  const [cuerpo1, setCuerpo1] = useState('');
  const [casa1, setCasa1] = useState('');
  const [cosa2, setCosa2] = useState('');
  const [number, setNumber] = useState('');
  const [Adjetivo2, setAdjetivo2] = useState('');
  const [nombrep, setNombrep] = useState('');
  const [status, setStatus] = useState('initial');
  const [isDisabled, setIsDisabled] = useState(false);
  
  function handleSubmit(event){
    event.preventDefault();
    if (lname && Adjetivo && action1 && cosa1 && casa1 && cosa2 && number && Adjetivo2 && nombrep) {
      setStatus('complete');
      setIsDisabled(true);
      alert("Carta generada con exito, suerte casanova wink wink");
    }
    else{
      setStatus('initial');
      setIsDisabled(false);
      alert("No has completado todos los campos");
    }

    return{
      lname,

    }
  }

  function handleClick(event){
    setlname('');
    setAdjetivo('');
    setAction1('');
    setCosa1('');
    setCuerpo1('');
    setCasa1('');
    setCosa2('');
    setNumber('');
    setAdjetivo2('');
    setNombrep('');
    setStatus('initial');
    setIsDisabled(false);      
  }

  function clickRandomize(event){
    
    const lnamearray=["Dua", "Kendall", "Nicole", "Fernanda", "Alexandra", "Ed", "Miguel", "Ben", "Harry", "Niall"];
    const Adjetivoarray=["espectacular", "irresistible", "ejemplar", "sublime", "extravagante", "interesante", "amable", "afable", "horripilante", "antojable"];
    const Action1array=["cenar", "bailar", "nadar", "cantar", "dormir", "ligar", "amar", "leer", "escribir", "dibujar"];
    const Cosa1array=["yoyos", "niños", "berrinches", "regaños", "gatos", "perros", "bebés", "anuncios", "trabajos", "videojuegos"];
    const Cuerpo1array=["ojo", "rostro", "cuerpo", "pie", "pelo", "labio", "dedo", "riñón", "corazón", "trasero"];
    const Casa1array=["chochera", "sala", "cocina", "cuarto", "baño", "patio", "puerta", "alberca", "hamaca", "bodega"];
    const Cosa2array=["bujias", "perros", "trofeos", "premios", "carros", "ventanas", "trastes", "motocicletas", "sentimientos", "deseos"];
    const Numberarray=["mil", "milochomil", "cien", "un", "tres", "once", "trece", "11", "13", "1000"];
    const Adjetivo2array=["belleza", "hermosura", "elegancia", "magnificencia", "lindura", "perfección", "preciosidad", "atractivo", "encando", "estética"];
    const Nombreparray=["Josué", "Alejandro", "Omar", "Zayn", "Britney", "Miley", "Olivia", "Taylor", "Luis", "Anne"];

    let lnamelength = lnamearray.length;
    let lnamei = (Math.floor(Math.random() * lnamelength));
    let lnamer = lnamearray[lnamei];

    let Adjetivolength = Adjetivoarray.length;
    let Adjetivoi = (Math.floor(Math.random() * Adjetivolength));
    let Adjetivor = Adjetivoarray[Adjetivoi];

    let action1length = Action1array.length;
    let action1i = (Math.floor(Math.random() * action1length));
    let action1r = Action1array[action1i];

    let cosa1length = Cosa1array.length;
    let cosa1i = (Math.floor(Math.random() * cosa1length));
    let cosa1r = Cosa1array[cosa1i];

    let cuerpo1length = Cuerpo1array.length;
    let cuerpo1i = (Math.floor(Math.random() * cuerpo1length));
    let cuerpo1r = Cuerpo1array[cuerpo1i];

    let casa1length = Casa1array.length;
    let casa1i = (Math.floor(Math.random() * casa1length));
    let casa1r = Casa1array[casa1i];

    let cosa2length = Cosa2array.length;
    let cosa2i = (Math.floor(Math.random() * cosa2length));
    let cosa2r = Cosa2array[cosa2i];

    let numberlength = Numberarray.length;
    let numberi = (Math.floor(Math.random() * numberlength));
    let numberr = Numberarray[numberi];

    let Adjetivo2length = Adjetivo2array.length;
    let Adjetivo2i = (Math.floor(Math.random() * Adjetivo2length));
    let Adjetivo2r = Adjetivo2array[Adjetivo2i];

    let nombreplength = Nombreparray.length;
    let nombrepi = (Math.floor(Math.random() * nombreplength));
    let nombrepr = Nombreparray[nombrepi];

    setlname(lnamer);
    setAdjetivo(Adjetivor);
    setAction1(action1r);
    setCosa1(cosa1r);
    setCuerpo1(cuerpo1r);
    setCasa1(casa1r);
    setCosa2(cosa2r);
    setNumber(numberr);
    setAdjetivo2(Adjetivo2r);
    setNombrep(nombrepr);
  }

  function clickPrint(event){
    if (status==="complete"){
      var c = document.getElementById("canvas");

      html2canvas(c).then(function(canvas) {
          document.body.appendChild(canvas);
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="ui">
          <form className="form" onSubmit={handleSubmit}>

            <div className="base">
              <div className="data">
              <fieldset className="data" disabled={isDisabled}>
                <div className="container">
                  <div className="cont">
                    <label htmlFor="lname">Lover name</label>
                    <input className="values" type="text" id="lname" name="lname" placeholder="A quien le escribes la carta" value={lname} onChange={e => setlname(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="ladj">Adjetivo</label>
                    <input className="values" type="text" id="ladj" name="ladj" placeholder="Como describes a quien le escribes" value={Adjetivo} onChange={e => setAdjetivo(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="action1">Verbo</label>
                    <input className="values" type="text" id="action1" name="action1" placeholder="Que te gusta hacer" value={action1} onChange={e => setAction1(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cosa1">Cosa</label>
                    <input className="values" type="text" id="cosa1" name="cosa1" placeholder="Cualquier cosa que odies" value={cosa1} onChange={e => setCosa1(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cuerpo1">Parte del cuerpo</label>
                    <input className="values" type="text" id="cuerpo1" name="cuerpo1" placeholder="Una parte del cuerpo en masculino" value={cuerpo1} onChange={e => setCuerpo1(e.target.value)}/>
                  </div>
                </div>

                <div className="container">
                  <div className="cont">
                    <label htmlFor="casa1">Lugar de tu casa</label>
                    <input className="values" type="text" id="casa1" name="casa1" placeholder="Un lugar de tu casa" value={casa1} onChange={e => setCasa1(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cosa2">Cosas que limpies</label>
                    <input className="values" type="text" id="cosa2" name="cosa2" placeholder="Cosas que limpies seguido" value={cosa2} onChange={e => setCosa2(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="number">Numero</label>
                    <input className="values" type="text" id="number" name="number" placeholder="Cualquier numero en letra o numero" value={number} onChange={e => setNumber(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="Adjetivo2">Segundo adjetivo</label>
                    <input className="values" type="text" id="Adjetivo2" name="Adjetivo2" placeholder="Otro adjetivo diferente del primero" value={Adjetivo2} onChange={e => setAdjetivo2(e.target.value)}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="nombrep">Tu nombre</label>
                    <input className="values" type="text" id="nombrep" name="nombrep" placeholder="Tu nombre, apodo, como te guste que te digan" value={nombrep} onChange={e => setNombrep(e.target.value)}/>
                  </div>
                </div>
              </fieldset>
              </div>
               
              <div className="btns">
                <button className="btn" id="generar" type="submit">Generate</button>

                <button className="btn" id="reset" type="button" onClick={handleClick}>Reset</button>
              </div>
              <div className="btns">
                <button className="btn" id="random" type="button" onClick={clickRandomize}>Random</button>
                <button className="btn" id="print" type="button" onClick={clickPrint}>Print</button>
              </div>

            </div>
           
          </form>

        </div>
        
        {status==='complete' ? <Card lname={lname} Adjetivo={Adjetivo} action1={action1} cosa1={cosa1} cosa2={cosa2} casa1={casa1} cuerpo1={cuerpo1} number={number} nombrep={nombrep} Adjetivo2={Adjetivo2}/> : null }
      </header>
    </div>
    
  );
}

export default App;
