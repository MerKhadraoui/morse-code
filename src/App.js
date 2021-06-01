import React, { useState } from "react";
import Header from "./components/Header";

import Data from "./data.json";
function App() {
  const [userInput, setUserInput] = useState("");
  const data = Data.map((prop) => console.log(prop));
  return (
    <React.Fragment>
      <Header userInput={setUserInput} />
    </React.Fragment>
  );
}

export default App;
