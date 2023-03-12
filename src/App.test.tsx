import { render, screen, waitFor } from "@testing-library/react";
import App from "./app";

test("renders learn react link", () => {
  render(<App />);
  const app = screen.getByRole("app");
  expect(app).toBeInTheDocument();
});

test("check whether Home component loaded in app or not", () => {
  render(<App />);
  const homeComponent = screen.getByRole("home");
  expect(homeComponent).toBeInTheDocument();
});

test("check whether Page component loaded in app or not", () => {
  render(<App />);
  const pageComponent = screen.getByRole("pages");
  expect(pageComponent).toBeInTheDocument();
});

test("check whether home arrow and page arrow are loaded", async () => {
  render(<App />);
  const downArrowComponent = await waitFor(() =>
    screen.findAllByTestId("down-arrow")
  );

  expect(downArrowComponent.length).toBe(2);
});
