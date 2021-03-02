import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Questions from "./Questions";
import "@testing-library/jest-dom/extend-expect";

describe("Question renders without creashing and testing 'next' button", () => {
  let component: any;
  test("Renders Questions", () => {
    let arr: string[] = ["Alaska", "Washington", "Texas", "California"];
    component = render(
      <Questions
        ques="What state is the largest state of the United States of America?"
        answers={arr}
        optionVisible={true}
        quesNextChange={jest.fn()}
        quesPrevChange={jest.fn()}
        position={0}
        selectedAns={jest.fn()}
        selectedA={false}
        selectedB={false}
        selectedC={false}
        selectedD={false}
        answeredValue=""
        scoreCalc={jest.fn()}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Next");
    expect(button).not.toHaveTextContent("Prev");
    fireEvent.click(button);
  });
});
