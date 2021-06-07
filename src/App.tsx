import { Fragment } from "react";
import { Router } from "@reach/router";
import { Header } from "components/Header";
import { GlobalStyles } from "styles/GlobalStyles";
import { Principal } from "views/Principal";
import { GlobalVariables } from "styles/GlobalVariables";
import { Course } from "components/Course";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <GlobalVariables />
      <Header />
      <Router>
        <Principal path="/" />
        <Course path="/course" />
      </Router>
    </Fragment>
  );
}

export default App;
