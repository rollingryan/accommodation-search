import styled from "@emotion/styled";
import { Card as MuiCard, CardProps } from "@mui/material";

export const Wrapper = styled.div`
  padding: 5rem 0;
`;

export const Card = styled(MuiCard)<CardProps>`
  margin: 2rem 0;
`;
