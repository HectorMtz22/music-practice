import { RouteComponentProps } from "@reach/router";

type Params = {
  id: string;
};

export const Detail = ({ id }: RouteComponentProps<Params>) => {
  console.log(id);
  return (
    <h1>
      <span>Haz hecho ping here!!!</span>
    </h1>
  );
};
