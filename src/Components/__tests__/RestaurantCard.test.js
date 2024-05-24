import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
describe("RestaurantCard", () => {
  it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard resList={MOCK_DATA} />);
    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
  });
});

describe("RestaurantCard", () => {
  it("Should render RestaurantCard component with Promoted Label", () => {
    const Promoted = withPromotedLabel(RestaurantCard);
    render(<Promoted resList={MOCK_DATA} />);
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
  });
});
