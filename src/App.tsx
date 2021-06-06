import { Fragment } from "react";
import { Header } from "components/Header";
import React from "react";
import { GlobalStyles } from "styles/GlobalStyles";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <Header />
        <h1>It Works!</h1>
      </div>
    </Fragment>
  );
}

export default App;
