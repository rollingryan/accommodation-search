import styled from "@emotion/styled";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  CardProps,
  CardContentProps,
  CardMediaProps,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const Card = styled(MuiCard)<CardProps>`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 0 4rem;
  border-radius: 0.5rem;
`;

export const CardContent = styled(MuiCardContent)<CardContentProps>`
  flex: 2;
  padding: 1rem;
`;

export const CustomCarousel = styled(Carousel)`
  flex: 1;
`;

export const CardMedia = styled(MuiCardMedia)<CardMediaProps>`
  height: 15rem;
`;

export const ListItemText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`;

export const Price = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
`;
