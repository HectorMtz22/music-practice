import { RouteComponentProps } from "@reach/router";

import { Wrapper, Img, Title, Description, Price, ImgWrapper } from "./styles";

export const Course = (props: RouteComponentProps) => {
  // const aver = useContext(Context);
  // console.log(aver);
  return (
    <Wrapper>
      <Title>Title</Title>
      <ImgWrapper>
        <Description>
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
        <Img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt="Image"
        />
      </ImgWrapper>
      <Price>Price: 400USD</Price>
    </Wrapper>
  );
};
