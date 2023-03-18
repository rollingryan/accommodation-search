import { useState } from "react";
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";

import * as Styled from "./styles";
import { selectedDestinationAtom } from "../../app/recoil/atoms/selectedDestinationAtom";

const SearchHeader = (destinations: any): React.ReactElement => {
  const flatDestinations = destinations?.destinations;

  // TODO: Finish the search functionality
  const [destination, setDestination] = useRecoilState(selectedDestinationAtom);
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);
  const [guests, setGuests] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const handleDestinationChange = (event: SelectChangeEvent) => {
    setDestination(event.target.value as string);
  };

  const handleFromDateChange = (newValue: Dayjs) => {
    setFromDate(newValue as Dayjs);
  };

  const handleToDateChange = (newValue: Dayjs) => {
    setToDate(newValue as Dayjs);
  };

  const handleGuestsChange = (event: any) => {
    setGuests(event.target.value as number);
  };

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Styled.Wrapper>
        <Container disableGutters>
          <Styled.Form onSubmit={handleSubmit} data-testid="search-form">
            <Styled.FormControl>
              <Styled.InputLabel id="destination">
                Destination
              </Styled.InputLabel>
              <Select
                data-testid="destination-select"
                color="secondary"
                variant="outlined"
                labelId="destination"
                id="destination-select"
                value={destination}
                label="Destination"
                onChange={handleDestinationChange}
              >
                {flatDestinations.map((destination: any) => (
                  <MenuItem key={destination.code} value={destination.name}>
                    {destination.name}
                  </MenuItem>
                ))}
              </Select>
            </Styled.FormControl>

            <Styled.FormGroup data-testid="date-group">
              <DatePicker
                value={fromDate}
                onChange={handleFromDateChange}
                label="From"
              />
              <DatePicker
                value={toDate}
                onChange={handleToDateChange}
                label="To"
              />
            </Styled.FormGroup>

            <FormControl>
              <TextField
                data-testid="guests"
                color="secondary"
                type="number"
                variant="outlined"
                onChange={handleGuestsChange}
                value={guests}
                label="Guests"
                id="guests"
              />
            </FormControl>

            <Styled.FormControl>
              <Typography id="price-range" gutterBottom>
                Price range (€)
              </Typography>

              <Slider
                data-testid="price-range"
                color="secondary"
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
              />
            </Styled.FormControl>
          </Styled.Form>
        </Container>
      </Styled.Wrapper>
    </LocalizationProvider>
  );
};

export default SearchHeader;
