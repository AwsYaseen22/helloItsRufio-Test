import { chai } from "chai";
const expect = chai.expect;

import { addTwoNumbers } from "../app.js";

describe("addTwoNumbers", () => {
  // idevidual tests list below
  it("should return the correct sum", () => {
    // ASSEMBLE
    const inputOne = 5;
    const inputTwo = 10;

    const expectedOutput = 15;

    // ACTION
    const result = addTwoNumbers(inputOne, inputTwo);

    // ASSERT
    expect(result).to.equal(expectedOutput);
  });
});
