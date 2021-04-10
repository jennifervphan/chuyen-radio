import styled from "@emotion/styled";

import { COLOURS } from "../constants";

export const LayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  background-color: ${COLOURS[0]};
`;

export const Container = styled.div`
  height: 100%;
`;
