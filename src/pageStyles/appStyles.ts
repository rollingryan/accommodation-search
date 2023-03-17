import styled from "@emotion/styled";
import { Box as MuiBox, BoxProps } from "@mui/material";

export const Box = styled(MuiBox)<BoxProps>`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  background: linear-gradient(100deg, #006463 0%, #530da9 85%, #264a90 100%);
`;
