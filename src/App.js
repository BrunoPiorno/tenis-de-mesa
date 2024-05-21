import React from 'react';
import Header from './layout/header';
import Hero from './layout/hero';
import Categorias from './components/categorias';
import SponsorsGrid from './components/sponsors';
import MainComponent from './components/maincomponent';
import Form from './components/form';
import Footer from './layout/footer';
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('TU_ID_DE_SEGUIMIENTO');

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categorias />
      <SponsorsGrid />
      <Form />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;