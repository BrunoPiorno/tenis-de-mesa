import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './layout/header';
import Hero from './layout/hero';
import Categorias from './components/categorias';
import SponsorsGrid from './components/sponsors';
import MainComponent from './components/maincomponent';
import Form from './components/form';
import Footer from './layout/footer';
import CalendarComponent from './components/CalendarComponent';

// import Clases from './components/clases';
import './App.css';
import initializeAnalytics from './analytics';
import ReactGA from 'react-ga4';

const App = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <Router>
      <Analytics />
      <div>
        <Header />
        <Hero />
        <Categorias />
        <SponsorsGrid />
        {/* <Form/> */}
        <CalendarComponent />
        <MainComponent />
        <Footer />
      </div>
    </Router>
  );
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default App;