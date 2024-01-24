import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App/>)

  const inputs = screen.getAllByRole("textbox")
  
  expect(inputs.length).toBe(2)
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App/>)
  const boxes = screen.getAllByRole("checkbox")
  expect(boxes.length).toBe(3)
  // your test code here
});

test("the checkboxes are initially unchecked", () => {
  render(<App/>)
  const boxes = screen.getAllByRole("checkbox")
  expect(boxes[0]).not.toBeChecked()

  expect(boxes[1]).not.toBeChecked()

  expect(boxes[2]).not.toBeChecked()
  // your test code here
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App/>)
  const nameForm = screen.getAllByRole("textbox")[0]
  const emailForm = screen.getAllByRole("textbox")[1]

  userEvent.type(nameForm, "Elise")
  userEvent.type(emailForm, "elise@email.com")

  const name = screen.getByText("Elise")
  expect(name).toBeInTheDocument()

  const email = screen.getByText("elise@email.com")
  expect(email).toBeInTheDocument()
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App/>)
  const box1 = screen.getAllByRole("checkbox")[0]
  const box2 = screen.getAllByRole("checkbox")[1]
  const box3 = screen.getAllByRole("checkbox")[2]

  userEvent.click(box1)
  userEvent.click(box2)
  userEvent.click(box3)

  expect(box1).toBeChecked()
  expect(box2).toBeChecked()
  expect(box3).toBeChecked()
  // your test code here
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App/>)
  const button = screen.getByText("Submit")

  userEvent.click(button)

  const submitted = screen.getByText("Done!")
  expect(submitted).toBeInTheDocument()
});
