import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_CARD from "../mocks/resAllCardsMock.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_CARD),
  })
);

describe("Search Component", () => {
  beforeAll(() => {
    // console.log("beforeAll");
  });

  beforeEach(() => {
    // console.log("beforeEach");
  });

  afterAll(() => {
    // console.log("afterAll");
  });

  afterEach(() => {
    // console.log("afterEach");
  });

  it("Should render the Body componnet", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  });

  // it("Should search Res List for Pizza text input", async () => {
  //   await act(async () =>
  //     render(
  //       <BrowserRouter>
  //         <Body />
  //       </BrowserRouter>
  //     )
  //   );
  //   const searchBtn = screen.getByRole("button", { name: "Search" });
  //   console.log(screen);
  //   expect(searchBtn).toBeInTheDocument();
  //   const searchInput = screen.getByTestId("search-input");
  //   // expect(searchInput).toBeInTheDocument();
  //   fireEvent.change(searchInput, { target: { value: "Pizza" } });
  //   fireEvent.click(searchBtn);
  //   const cardsAfterSearch = screen.getAllByTestId("restaurant-card");
  //   expect(cardsAfterSearch.length).toBe(2);
  // });
});
