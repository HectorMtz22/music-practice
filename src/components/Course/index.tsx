import { useContext } from "react";
import { Context } from "Context";
import { RouteComponentProps } from "@reach/router";

export const Course = (props: RouteComponentProps) => {
  const aver = useContext(Context);
  console.log(aver);
  return (
    <div>
      <h1>Soy un componente</h1>
    </div>
  );
};
