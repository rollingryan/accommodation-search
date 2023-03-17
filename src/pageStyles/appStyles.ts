import styled from "@emotion/styled";
import { Container as MuiContainer, ContainerProps } from "@mui/material";

export const Container = styled(MuiContainer)<ContainerProps>`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background: linear-gradient(100deg, #006463 0%, #530da9 85%, #264a90 100%);
`;
