import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestuarantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestuarantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordioanHeader = screen.getByText("Biryanis, Curries and Roti (17)");
  fireEvent.click(accordioanHeader);
  const foodItems = screen.getAllByTestId("food-item");
  expect(foodItems).toHaveLength(17);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
});

it("should load Cart component", () => {});
