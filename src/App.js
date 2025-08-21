import './App.css';
import OficinaComponente from './Componentes/modulo01/OficinaComponente';
import OficinaBandeira from './Componentes/modulo01/OficinaBandeira';
import OficinaForm from './Componentes/modulo01/OficinaForm';
import CalculadoraIP from './Componentes/modulo01/CalculadoraIP';
import { MeuTemplate } from './Componentes/modulo02/MeuTemplate';
import MeuEvento from './Componentes/modulo02/MeuEvento';
import MeuEventoRenderiza from './Componentes/modulo02/MeuEventoRenderiza';
import RenderizarListas from './Componentes/modulo03/RenderizarListas';
import RenderizaListasIndice from './Componentes/modulo03/RenderizaListasIndice';
function App() {

  return (
    <div className="App">
        <h1> Projeto para o aluno praticar </h1>
        <h1> Douglas </h1>
        {/* Meu primeiro componente  
        <OficinaComponente />
        <MeuTemplate />
        <MeuEvento />
        <MeuEventoRenderiza />
        <RenderizarListas />
        */}
        <RenderizaListasIndice />



    </div>
  );
}
export default App;
