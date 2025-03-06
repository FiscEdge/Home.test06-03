import React from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Products from '../src/components/Products';
import Subscription from '../src/components/Subscription';
import Community from '../src/components/Community';
import Contact from '../src/components/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>FiscEdge - Soluzioni fiscali innovative</title>
        <meta name="description" content="Soluzioni fiscali avanzate per professionisti e aziende" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Community />
        <Subscription />
        <Contact />
      </main>
    </div>
  );
}
