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
import RenderizaListaVetorRemove from './Componentes/modulo04/RenderizaListaVetorRemove';
import RenderizaCondicional from './Componentes/modulo04/RenderizaCondicional';
import RenderizaCondicionalElse from './Componentes/modulo04/RenderizaCondicionalElse';
import MinhaProps from './Componentes/modulo04/MinhaProps';
import CarroDesestruturarPropriedades from './Componentes/modulo05/CarroDesestruturarPropriedades';
import RecuperarCarros from './Componentes/modulo06/RecuperarCarros';
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
        <RenderizaListasIndice />
        <RenderizaListaVetorRemove  />
        <RenderizaCondicionalElse />
        <RenderizaCondicional />
        <MinhaProps nome="Douglas" />
        <CarroDesestruturarPropriedades
          marca="Fiat" cor="Branco" zero="2020"  km="10000" />
       */}

       <CarroDesestruturarPropriedades
          marca="Fiat" cor="Branco" zero="2020"  km="10000" />
    </div>
  );
}
export default App;
