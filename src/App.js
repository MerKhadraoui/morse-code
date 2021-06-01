import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Data from "./data.json";
function App() {
  const [transCode, setTransCode] = useState("");

  return (
    <React.Fragment>
      <Header />
      <Footer transCode={setTransCode} />
    </React.Fragment>
  );
}

export default App;
