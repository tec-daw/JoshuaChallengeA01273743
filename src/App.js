import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const lname = useFormInput('');
  const Adjetivo = useFormInput('');
  const action1 = useFormInput('');
  const cosa1 = useFormInput('');
  const cuerpo1 = useFormInput('');
  const casa1 = useFormInput('');
  const cosa2 = useFormInput('');
  const number = useFormInput('');
  const Adjetivo2 = useFormInput('');
  const nombrep = useFormInput('');
  const [status, setStatus] = useState('');
  
  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="ui">
          <form className="form" onSubmit={handleSubmit}>
            <div className="base">
              <div className="data">
                <div className="container">
                  <div className="cont">
                    <label htmlFor="lname">Lover name</label>
                    <input className="values" type="text" id="lname" name="lname" placeholder="A quien le escribes la carta" {...lname}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="ladj">Adjetivo</label>
                    <input className="values" type="text" id="ladj" name="ladj" placeholder="Como describes a quien le escribes" {...Adjetivo}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="action1">Verbo</label>
                    <input className="values" type="text" id="action1" name="action1" placeholder="Que te gusta hacer" {...action1}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cosa1">Cosa</label>
                    <input className="values" type="text" id="cosa1" name="cosa1" placeholder="Cualquier cosa que odies" {...cosa1}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cuerpo1">Parte del cuerpo</label>
                    <input className="values" type="text" id="cuerpo1" name="cuerpo1" placeholder="Una parte del cuerpo en masculino" {...cuerpo1}/>
                  </div>
                </div>

                <div className="container">
                  <div className="cont">
                    <label htmlFor="casa1">Lugar de tu casa</label>
                    <input className="values" type="text" id="casa1" name="casa1" placeholder="Un lugar de tu casa" {...casa1}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="cosa2">Cosas que limpies</label>
                    <input className="values" type="text" id="cosa2" name="cosa2" placeholder="Cosas que limpies seguido" {...cosa2}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="number">Numero</label>
                    <input className="values" type="text" id="number" name="number" placeholder="Cualquier numero en letra o numero" {...number}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="Adjetivo2">Segundo adjetivo</label>
                    <input className="values" type="text" id="Adjetivo2" name="Adjetivo2" placeholder="Otro adjetivo diferente del primero" {...Adjetivo2}/>
                  </div>
                  <div className="cont">
                    <label htmlFor="nombrep">Tu nombre</label>
                    <input className="values" type="text" id="nombrep" name="nombrep" placeholder="Tu nombre, apodo, como te guste que te digan" {...nombrep}/>
                  </div>
                </div>
              </div>
              <div className="btns">
                <input className="btn" id="generar" type="submit" value="Generate"/>

                <input className="btn" id="reset" type="submit" value="Reset" />
              </div>
            </div>
            
          </form>
        </div>
        <div className="wrapper">
          <div className="letter-wrapper">
            <div className="letter">
              <p className="cursive">Querida <em>Raiza</em>,</p>
              <p className="body">
                Nunca he escrito cartas de amor, pero me pareces <em>irresistible</em>. Me puedes llamar <em>Joshua</em>, 
                me gusta pasear de la mano de una dama, <em>cenar</em> a la luz de las velas y odio los <em>yoyos</em>. 
              </p>
              <p className="body">
                Tu foto me dejo sin aliento, en verdad tienes un <em>cuerpo</em> de lujo, ayer en la mañana puse tu foto en mi <em>cochera</em> para inspirarme a limpiar mis <em>bugías</em>. Ni mil poetas en <em>mil</em> años podrian describir un tercio de tu <em>belleza</em>
                ... a pesar de todo, debo alejarme.
              </p> 
              <p className="body">  
                ¿Por qué? No puedo decirlo 
                ¿A dónde iré? No puedes saberlo  
                ¿Cómo llegaré? Ahh todavía no lo decido... 
              </p>
              <p className="body">Pero puedo decirte algo, cada vez que escuche al viento, susurrará tu nombre... <em>Raiza</em></p>
              <p className="writer cursive">Atte. <em>Joshua</em></p>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

function useFormInput(initialValue){
  const[value, setValue] = useState(initialValue)
  
  function handleChange(event){
    setValue(event.target.value)
  }

  return{
    value, 
    onChange: handleChange
  }
}

export default App;
