import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import renderer from "react-test-renderer";

describe("Homepage Testing", () => {
  test("Renders without crashing and displays a button with text", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("onclick event testing of 'Let's Start' button ", () => {
    // const CallBack = jest.fn();
    const component = render(<App />);
    const button = screen.getByText("Let's Start");
    //fireEvent.click(button);
    // expect(CallBack).toBeCalledTimes(1);
  });
});
