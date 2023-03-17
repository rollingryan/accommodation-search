import {
  Card,
  CardContent,
  CardHeader,
  Container,
  createTheme,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";

import * as Styled from "./styles";

const SearchResults = (results: any): React.ReactElement => {
  const theme = useTheme();
  const flatResults = results.results;
  const lightTheme = createTheme({ ...theme, palette: { mode: "light" } });

  return (
    <ThemeProvider theme={lightTheme}>
      <Styled.Wrapper>
        <Container>
          {flatResults.map((result: any) => (
            <Styled.Card key={result.address}>
              <CardContent>
                <CardHeader title={result.name} subheader={result.address} />
                <List>
                  {result.combinations.map((combination: any) => {
                    const keys = Object.keys(combination);
                    return (
                      <ListItem key={combination.price}>
                        <ListItemText
                          primary={
                            <Typography>
                              {keys[0]
                                ? `${combination[keys[0]]} ${keys[0]}`
                                : ""}
                              {keys[1] && keys[1] !== "price"
                                ? ` and ${combination[keys[1]]} ${keys[1]}`
                                : ""}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="h6">
                              {combination.price}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Styled.Card>
          ))}
        </Container>
      </Styled.Wrapper>
    </ThemeProvider>
  );
};

export default SearchResults;
