import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categorias from './components/categorias';
import SponsorsGrid from './components/sponsors';
import MainComponent from './components/maincomponent';
import Form from './components/form';
import Footer from './components/footer';
import './App.css';

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