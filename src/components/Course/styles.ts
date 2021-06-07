import styled from "styled-components";

export const Wrapper = styled.main`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #ddd;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

export const Description = styled.p`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Price = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

export const ImgWrapper = styled.main`
  position: relative;
  overflow: hidden;
  height: 150px;
`;
