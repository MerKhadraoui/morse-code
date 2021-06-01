import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./data.json";
function App() {
  const data = Data.map((item) => item);
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
