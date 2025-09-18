import React, { useState } from 'react';
import './styles.css';

// Components
import OficinaComponente from '../modulo01/OficinaComponente';
import OficinaBandeira from '../modulo01/OficinaBandeira';
import OficinaForm from '../modulo01/OficinaForm';
import CalculadoraIP from '../modulo01/CalculadoraIP';
import { MeuTemplate } from '../modulo02/MeuTemplate';
import MeuEvento from '../modulo02/MeuEvento';
import MeuEventoRenderiza from '../modulo02/MeuEventoRenderiza';
import RenderizarListas from '../modulo03/RenderizarListas';
import RenderizaListasIndice from '../modulo03/RenderizaListasIndice';
import RenderizaListaVetorRemove from '../modulo04/RenderizaListaVetorRemove';
import RenderizaCondicional from '../modulo04/RenderizaCondicional';
import RenderizaCondicionalElse from '../modulo04/RenderizaCondicionalElse';
import MinhaProps from '../modulo04/MinhaProps';
import CarroDesestruturarPropriedades from '../modulo05/CarroDesestruturarPropriedades';
import RecuperarCarros from '../modulo06/RecuperarCarros';
import FragmentoReact from '../modulo07/FragmentoReact';
import PropFilha from '../modulo07/PropFilha';
import Calculator from '../modulo08/Calculator';
import JogoCacaPalavrasPrincipal from '../JogoCacaPalavrasParte01/JogoCacaPalavrasPrincipal';
import JogoCacaPalavrasPrincipal02 from '../JogoCacaPalavrasParte02/JogoCacaPalavrasPrincipal';
import JogoCacaPalavrasPrincipal03 from '../JogoCacaPalavrasParte02/JogoCacaPalavrasPrincipal';

const UnificandoModulos = () => {
  const [activeModule, setActiveModule] = useState('home');

  // Components mapping
  const modules = {
    home: {
      title: 'Bem-vindo ao Sistema Unificado',
      component: () => (
        <div className="welcome-section">
          <h1>Sistema de Demonstração React</h1>
          <p>Selecione um módulo no menu para começar</p>
          <OficinaBandeira />
        </div>
      )
    },
    oficina: {
      title: 'Módulo Oficina',
      component: () => (
        <div className="module-section">
          <OficinaComponente />
          <OficinaForm />
        </div>
      )
    },
    calculadora: {
      title: 'Calculadora IP',
      component: CalculadoraIP
    },
    eventos: {
      title: 'Eventos e Templates',
      component: () => (
        <div className="module-section">
          <MeuTemplate />
          <MeuEvento />
          <MeuEventoRenderiza />
        </div>
      )
    },
    listas: {
      title: 'Renderização de Listas',
      component: () => (
        <div className="module-section">
          <RenderizarListas />
          <RenderizaListasIndice />
          <RenderizaListaVetorRemove />
        </div>
      )
    },
    condicionais: {
      title: 'Renderização Condicional',
      component: () => (
        <div className="module-section">
          <RenderizaCondicional />
          <RenderizaCondicionalElse />
          <MinhaProps nome="Usuário Exemplo" />
        </div>
      )
    },
    carros: {
      title: 'Sistema de Carros',
      component: () => (
        <div className="module-section">
          <CarroDesestruturarPropriedades
            marca="Fiat"
            cor="Vermelho"
            zero={true}
            km={0}
          />
          <RecuperarCarros />
        </div>
      )
    },
    avancado: {
      title: 'Recursos Avançados',
      component: () => (
        <div className="module-section">
          <FragmentoReact />
          <PropFilha nomeDev="Desenvolvedor React">
            <p><br></br>Programa PropFilha.js</p>
            <h1>Exemplo de Propriedade Filha</h1>
            <h2>Este é o h2 do PropFilha</h2>
            <h3>Este é o h3 do PropFilha</h3>
          </PropFilha>
        </div>
      )
    },
    funcaoParametro: {
      title: 'Funcao Parametro',
      component: Calculator
    },
    jogocacapalavras: {
      title: 'Caça Palavras Etapa 01',
      component: JogoCacaPalavrasPrincipal
    },
    jogocacapalavras02: {
      title: 'Caça Palavras Etapa 02',
      component: JogoCacaPalavrasPrincipal02  
    },
    jogocacapalavras03: {
      title: 'Caça Palavras Etapa 03',
      component: JogoCacaPalavrasPrincipal03
    }
  };

  const CurrentComponent = modules[activeModule].component;

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="nav-header">
          <h2>Módulos</h2>
        </div>
        {Object.entries(modules).map(([key, { title }]) => (
          <button
            key={key}
            className={`nav-button ${activeModule === key ? 'active' : ''}`}
            onClick={() => setActiveModule(key)}
          >
            {title}
          </button>
        ))}
      </nav>
      
      <main className="main-content">
        <header className="content-header">
          <h1>{modules[activeModule].title}</h1>
        </header>
        <div className="content-body">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
};

export default UnificandoModulos;
