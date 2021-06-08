import { Fragment } from "react";
import { Router } from "@reach/router";
import { Header } from "components/Header";
import { GlobalStyles } from "styles/GlobalStyles";
//import { Principal } from "views/Principal";
import { GlobalVariables } from "styles/GlobalVariables";
import { ListOfCourses } from "views/ListOfCourses";
import { Detail } from "views/Detail";
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <GlobalVariables />
      <Header />
      <Router>
        <ListOfCourses path="/" />
        <ListOfCourses path="/courses" />
        <Detail path="/course/:id" />
      </Router>
    </Fragment>
  );
}

export default App;
