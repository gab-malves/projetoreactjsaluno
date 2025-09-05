import './App.css';
import { TelaInicialProjeto } from './Componentes/JogoCacaPalavras/TelaInicialProjeto';
import UnificandoModulos from './Componentes/modulo07-01/UnificandoModulos';
import Calculator from './Componentes/modulo08/Calculator';

import {palavrasLista} from "./Componentes/JogoCacaPalavras/Util/Word"
// Acionará o UnificandoModulos.js
function App() {
  return (
    <div className="App">
      {/* Comment/uncomment the components below to switch between views */}
      <UnificandoModulos /> 
    </div>
  );
}

export default App;
