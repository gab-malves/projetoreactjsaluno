import './App.css';
import UnificandoModulos from './Componentes/modulo07-01/UnificandoModulos';
import Calculator from './Componentes/modulo08/Calculator';

// Acionará o UnificandoModulos.js
function App() {
  return (
    <div className="App">
      {/* Comment/uncomment the components below to switch between views */}
       {/* <UnificandoModulos /> */}
      <Calculator />
    </div>
  );
}

export default App;
