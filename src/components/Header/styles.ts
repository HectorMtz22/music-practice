import styled from "styled-components";

export const HeaderLayout = styled.header`
  padding: 0.8rem;
  background-color: var(--c2);
  color: #fff;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;
`;
