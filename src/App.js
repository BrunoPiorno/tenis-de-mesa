import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/header';
import Hero from './layout/hero';
import Categorias from './components/categorias';
import SponsorsGrid from './components/sponsors';
import MainComponent from './components/maincomponent';
import Form from './components/form';
import Footer from './layout/footer';
//import CalendarComponent from './components/CalendarComponent';
import initializeAnalytics from './analytics';
import ReactGA from 'react-ga4';
import './App.css';
import AnimatedBlock from './components/effect';

const App = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <Router>
      <Analytics />
      <Layout>
        <Routes>
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const Layout = ({ children }) => (
  <div>
    <Header />
    <AnimatedBlock><Hero /></AnimatedBlock>
    <AnimatedBlock><Categorias /></AnimatedBlock>
    <AnimatedBlock><SponsorsGrid /></AnimatedBlock>
    {/*<AnimatedBlock><CalendarComponent /></AnimatedBlock>*/}
    <AnimatedBlock><Form /></AnimatedBlock>
    <AnimatedBlock>{children}</AnimatedBlock>
    <Footer />
  </div>
);

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (ReactGA.isInitialized) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

export default App;
