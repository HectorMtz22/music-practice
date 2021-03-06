import { Fragment } from "react";
import { Router } from "@reach/router";
import { Header } from "components/Header";
import { GlobalStyles } from "styles/GlobalStyles";
import { Principal } from "views/Principal";
import { GlobalVariables } from "styles/GlobalVariables";
import { ListOfCourses } from "views/ListOfCourses";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <GlobalVariables />
      <Header />
      <Router>
        <Principal path="/" />
        <ListOfCourses path="/course" />
      </Router>
    </Fragment>
  );
}

export default App;
