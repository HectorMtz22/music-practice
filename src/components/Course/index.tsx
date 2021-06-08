import { CourseModel } from "models/Courses";

import { Wrapper, Img, Title, Description, Price, ImgWrapper } from "./styles";

export const Course = ({ id, title, description, img, price }: CourseModel) => {
  // const aver = useContext(Context);
  // console.log(aver);
  return (
    <Wrapper to={"/course/" + id}>
      <Title>{title}</Title>
      <ImgWrapper>
        <Description>{description}</Description>
        <Img src={img} alt={title} />
      </ImgWrapper>
      <Price>Price: {price}</Price>
    </Wrapper>
  );
};
