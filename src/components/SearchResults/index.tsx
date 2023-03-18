import {
  CardHeader,
  Container,
  createTheme,
  List,
  ListItem,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import * as Styled from "./styles";

const SearchResults = (results: any): React.ReactElement => {
  const theme = useTheme();
  const flatResults = results?.results;
  const lightTheme = createTheme({ ...theme, palette: { mode: "light" } });

  const primaryText = (keys: string[], combination: any) => {
    let text = "";

    if (keys[0] && combination[keys[0]]) {
      text = `${combination[keys[0]]} ${keys[0]}`;
    }

    if (keys[1] && combination[keys[1]]) {
      text += ` and ${combination[keys[1]]} ${keys[1]}`;
    }

    return text;
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Styled.Wrapper>
        <Container>
          {(flatResults.length &&
            flatResults?.map((result: any) => (
              <Styled.Card key={result.address}>
                <Styled.CardContent>
                  <CardHeader title={result.name} subheader={result.address} />
                  <List>
                    {result?.combinations?.map((combination: any) => {
                      const keys = Object.keys(combination);
                      return (
                        <ListItem key={combination.price}>
                          <Styled.ListItemText>
                            <Typography>
                              {primaryText(keys, combination)}
                            </Typography>
                            <Styled.Price>
                              <Typography variant="h6">
                                €{combination?.price}
                              </Typography>
                              <Typography>&nbsp;pppn</Typography>
                            </Styled.Price>
                          </Styled.ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Styled.CardContent>
                {result.images?.length ? (
                  <Styled.CustomCarousel
                    indicators={false}
                    duration={1000}
                    animation="slide"
                  >
                    {result.images.map((item: string) => (
                      <Styled.CardMedia key={item} image={item} />
                    ))}
                  </Styled.CustomCarousel>
                ) : null}
              </Styled.Card>
            ))) || <Typography variant="h2">No results found</Typography>}
        </Container>
      </Styled.Wrapper>
    </ThemeProvider>
  );
};

export default SearchResults;
