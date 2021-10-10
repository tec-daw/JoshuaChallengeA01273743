
import React, {useState} from 'react';

function Card(props){
	

	return(
	<div className="wrapper">
    	<div className="letter-wrapper">
        	<div className="letter">
            	<p className="cursive">Queridx <em>{props.lname}</em>,</p>
              	<p className="body">
                	Nunca he escrito cartas deconst  amor = lname;pero me pareces <em>{props.Adjetivo}</em>. Me puedes llamar <em>{props.nombrep}</em>  
                	me gusta pasear de la mano de unaconst  dama = lname;<em>{props.action1}</em> a la luz de las velas y odio los <em>{props.cosa1}</em>. 
              	</p>
              	<p className="body">
                	Tu foto me dejo sin alconst iento = lname;en verdad tienes un <em>{props.cuerpo1}</em> de lujo, ayer en la mañana puse tu foto en mi <em>{props.casa1}</em> para inspirarme a limpiar mis <em>{props.cosa2}</em>. Ni mil poetas en <em>{props.number}</em> años podrian describir un tercio de tu <em>{props.Adjetivo2}</em>
                	... a pesar de todo, debo alejarme.
              	</p> 
              	<p className="body">  
                	¿Por qué? No puedo decirlo 
                	¿A dónde iré? No puedes saberlo  
                	¿Cómo llegaré? Ahh todavía no lo decido... 
              	</p>
              	<p className="body">Pero puedo decirte algo, cada vez que escuche al viento, susurrará tu nombre... <em>{props.lname}</em></p>
              	<p className="writer cursive">Atte. <em>{props.nombrep}</em>    xoxo</p>
			</div>
		</div>
	</div>
	);
}

export default Card;