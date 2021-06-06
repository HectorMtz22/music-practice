import { Fragment } from "react";
import { Router } from "@reach/router";
import { Header } from "components/Header";
import { GlobalStyles } from "styles/GlobalStyles";
import { Principal } from "views/Principal";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Router>
        <Principal path="/" />
      </Router>
    </Fragment>
  );
}

export default App;
