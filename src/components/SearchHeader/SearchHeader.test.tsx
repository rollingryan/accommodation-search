import { fireEvent, render, screen } from "@testing-library/react";

import SearchHeader from "./index";
import { destinations } from "../../../__mocks__/destinations";

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

  // TODO: Finish setting up observer for recoil testing.
  // it("should call handleDestinationChange when destination is changed", () => {
  //   const handleDestinationChange = jest.fn();

  //   const destinationSelect = screen.getByTestId("destination-select");

  //   fireEvent.change(destinationSelect, { target: { value: "Madrid" } });

  //   expect(handleDestinationChange).toHaveBeenCalledTimes(2);
  //   expect(handleDestinationChange).toHaveBeenCalledWith(""); // Initial state on render.
  //   expect(handleDestinationChange).toHaveBeenCalledWith("Madrid"); // New value on change.
  // });
});
