import React from 'react';
import '../css/Nosotros.css';

const Nosotros = () => (
  <div className="nosotros-container">
    <h1>NOSOTROS</h1>
    <p>¿Te encontraste alguna vez en esos momentos donde sentís que no encajas en ningún lado, que todo está fuera de tu control y no coincidís con nadie? Bueno, nosotros sí. Para ayudarte a hacer frente a esas situaciones es que creamos MËLEꓘ. Existen 4 principios sobre los que vivimos y se transmiten a través de nuestra ropa:</p>
    <div className="nosotros-section">
      <img src="/crea-situaciones.png" alt="Crea situaciones" className="nosotros-img" />
      <div className="nosotros-text">
        <h2>CREA SITUACIONES</h2>
        <p>Esta frase nos parece tan importante que hasta la hicimos nuestro slogan (por si todavía no lo viste). A veces, con el correr de la rutina podemos sentir que nuestro cuerpo está siendo manejado por otra persona, o que fuimos una persona a la mañana en el trabajo, otra persona a la noche con amigos, y cuando nos queremos dar cuenta, no fuimos nosotros mismos en todo el día. Es por este motivo que, si sentís que no podés serte fiel en ningún momento, te incentivamos a que vos mismo crees las situaciones para ser como realmente sos.</p>
      </div>
    </div>
    <div className="nosotros-section">
      <img src="/comodidad.png" alt="Comodidad" className="nosotros-img" />
      <div className="nosotros-text">
        <h2>COMODIDAD</h2>
        <p>Como estilo de vida: con esto no nos referimos solamente a prendas que tengan buen calce y buena tela (con nosotros, eso lo podés dar por hecho). Lo que nos ponemos proyecta nuestra personalidad, y es una extensión de nosotros mismos, así que debemos estar cómodos con lo que vestimos.</p>
      </div>
    </div>
    <div className="nosotros-section">
      <img src="/para-encontrarnos.png" alt="Para encontrarnos" className="nosotros-img" />
      <div className="nosotros-text">
        <h2>PARA ENCONTRARNOS</h2>
        <p>Existe una conexión imposible de explicar, casi poética, cuando nos encontramos en la calle con alguien con el mismo buzo que nosotros; hay un intercambio de miradas que se asemeja con el de dos amigos de toda la vida, y lo único que tenemos en común puede ser que compramos ropa en el mismo lugar. Y si lo que estás buscando es iniciar una conversación con alguien, acá te tiramos la frase perfecta: “Disculpame, dónde compraste ese buzo?”</p>
      </div>
    </div>
    <div className="nosotros-section">
      <img src="/trascender.png" alt="Trascender" className="nosotros-img" />
      <div className="nosotros-text">
        <h2>TRASCENDER</h2>
        <p>Los minutos, las horas y los días van agrietando aquello que supo vivir en el pasado, de lo que sólo queda un recuerdo. Pero hay quienes resisten la fuerza del tiempo: por su arte, por su letra, por su lucha o por su estilo. Trascender es un acto de resistencia, una búsqueda constante de romper con las barreras impuestas por la cotidianidad. En cada prenda que creamos, buscamos ser un aliado para aquellos que desean dejar una huella perdurable en el mundo. Queremos inspirarlos a explorar su individualidad y a desafiar los límites de lo convencional. Trascender desde el estilo no es solo un objetivo para nosotros, sino una invitación a formar parte de un movimiento.</p>
      </div>
    </div>
  </div>
);

export default Nosotros;
