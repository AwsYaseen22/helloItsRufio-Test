import chai from "chai";
const expect = chai.expect;

import { addTwoNumbers, greaterThan18 } from "../app.js";

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
  it("should return false if parameters are not numbers", () => {
    // ASSEMBLE
    const inputOne = "5";
    const inputTwo = "10";

    // ACTION
    const result = addTwoNumbers(inputOne, inputTwo);

    // ASSERT
    expect(result).to.equal(false);
  });
});

// test another function
describe("greaterThan18", () => {
  // idevidual tests list below
  it("should return array of objects of users with age 18 or greater", () => {
    // ASSEMBLE
    const inputArray = [
      { name: "user1", age: 20 },
      { name: "user2", age: 10 },
    ];

    const expectedOutput = [{ name: "user1", age: 20 }];

    // ACTION
    const result = greaterThan18(inputArray);

    // ASSERT
    expect(result).to.deep.equal(expectedOutput);
  });
  it("should throw error if any object not contains age", () => {
    // ASSEMBLE
    const users = [{ name: "user1", age: 20 }, { name: "user2" }];

    // ACTION
    const testFunction = () => {
      greaterThan18(users);
    };

    // ASSERT
    expect(testFunction).to.throw("no age!");
  });
});
