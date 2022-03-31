import React from 'react';
import ReactDOM from 'react-dom';
import { TrainerApp } from './TrainerApp';



//RENDERIZAMOS EL CONTENIDO
ReactDOM.render(
//RENDERIZAMOS TRAINER APP
<TrainerApp/>,
//APUNTAMOS AL DIV CON ID ROOT, QUE HAY DEFINIDO EN EL PUBLIC/INDEX.HTML
  document.getElementById('root')
);

