import { useState } from 'react'
// import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Router from './Router';

function App() {

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
