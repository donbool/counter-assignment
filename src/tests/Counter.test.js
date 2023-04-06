// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = document.querySelector("h2");
    expect(message.textContent).toBe("Counter");
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = document.querySelector('[data-testid="count"]');
    expect(count.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = document.querySelector("button:nth-of-type(1)");
  const count = document.querySelector('[data-testid="count"]');
  fireEvent.click(incrementButton);
  expect(count.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = document.querySelector("button:nth-of-type(2)");
  const count = document.querySelector('[data-testid="count"]');
  fireEvent.click(decrementButton);
  expect(count.textContent).toBe("-1");
});
