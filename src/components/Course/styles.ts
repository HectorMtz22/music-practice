import styled from "styled-components";

export const Wrapper = styled.main`
  margin: 0.5rem;
  padding: 0.8rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
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
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1;
  color: #fefefe;
`;

export const Price = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

export const ImgWrapper = styled.main`
  position: relative;
  overflow: hidden;
  height: 200px;
  border-radius: 10px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--c2), var(--c1));
    opacity: 0.7;
  }
`;
