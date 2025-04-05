import './App.css';
import OficinaComponente from './Componentes/OficinaComponente';
import OficinaBandeira from './Componentes/OficinaBandeira';
import OficinaForm from './Componentes/OficinaForm';
import CalculadoraIP from './Componentes/CalculadoraIP';
function App() {
  return (
    <div className="App">
     <h1> Projeto para o aluno praticar </h1>
     <OficinaComponente />
     <OficinaBandeira />
     <OficinaForm />
     <CalculadoraIP/>
    </div>
  );
}
export default App;
