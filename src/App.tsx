import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import "./index.css";
import React from 'react';
function App() {
  return (
    <>
      <div className="main-app">
        <Header />
        <CurrencyConverter />
      </div>
    </>
  );
}

export default App;
