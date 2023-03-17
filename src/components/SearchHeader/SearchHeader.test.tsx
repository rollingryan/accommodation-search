import { fireEvent, render, screen } from "@testing-library/react";

import SearchHeader from "./index";
import { destinations } from "../../../__mocks__/destinations";

const mockHandleSubmit = jest.fn();

beforeEach(() => {
  render(<SearchHeader destinations={destinations} />);
});

describe("SearchHeader", () => {
  it("should render correctly", () => {
    const searchForm = screen.getByTestId("search-form");
    const destinationSelect = screen.getByTestId("destination-select");
    const dateInputs = screen.getByTestId("date-group");
    const guests = screen.getByTestId("guests");
    const priceRange = screen.getByTestId("price-range");
    const searchButton = screen.getByTestId("search-button");

    expect(searchForm).toBeInTheDocument();
    expect(destinationSelect).toBeInTheDocument();
    expect(dateInputs).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
    expect(priceRange).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
