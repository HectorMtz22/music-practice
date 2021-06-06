import { HeaderLayout, Title } from "./styles";
import { MdDehaze } from "react-icons/md";

const SIZE = "30px";

export const Header = () => {
  return (
    <HeaderLayout>
      <MdDehaze size={SIZE} />
      <Title>Music Practice!</Title>
    </HeaderLayout>
  );
};
