import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [transCode, setTransCode] = useState("");
  return (
    <React.Fragment>
      <Header setCode={setTransCode} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
