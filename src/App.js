import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
