import { render, screen, waitFor } from "@testing-library/react";
import { dateDiffInYears } from "../../utils/general";
import { Home } from "./home";

test("check whether Home component loaded", async () => {
  render(<Home />);
  const homeComponent = await waitFor(() => screen.findByRole("home"));
  expect(homeComponent).toBeInTheDocument();
});

test("check whether ProfileImage component loaded", async () => {
  render(<Home />);
  const profileImageComponent = await waitFor(() =>
    screen.findByTestId("home-profile-image")
  );
  expect(profileImageComponent).toBeInTheDocument();
});

test("check whether Name loaded and content is correct or not", async () => {
  render(<Home />);
  const nameComponent = await waitFor(() => screen.findByTestId("name"));

  expect(nameComponent).toBeInTheDocument();
  expect(nameComponent).toHaveTextContent(/Jino Chacko/);
});

test("check whether SubTitle loaded and content is correct or not", async () => {
  render(<Home />);
  const subTitleComponent = await waitFor(() =>
    screen.findByTestId("home-subtitle")
  );

  expect(subTitleComponent).toBeInTheDocument();
  expect(subTitleComponent).toHaveTextContent(
    /Frontend and Hybrid Mobile App Developer/
  );
});

test("check whether Experience loaded and content is correct or not", async () => {
  render(<Home />);
  const experience = dateDiffInYears(new Date("09/05/2012"), new Date());
  const expComponent = await waitFor(() =>
    screen.findByTestId("home-experience")
  );

  expect(expComponent).toBeInTheDocument();
  expect(expComponent.textContent).toContain("Years");
  expect(expComponent).toHaveTextContent(`${experience}+ Years`);
});

test("check whether Skills loaded and content has JavaScript skill", async () => {
  render(<Home />);
  const skillComponent = await waitFor(() =>
    screen.findByTestId("home-description")
  );

  expect(skillComponent).toBeInTheDocument();
  expect(skillComponent.textContent).toContain("JavaScript");
});

test("check whether down arrow loaded", async () => {
  render(<Home />);
  const downArrowComponent = await waitFor(() =>
    screen.findAllByTestId("down-arrow")
  );

  expect(downArrowComponent.length).toBe(1);
});
