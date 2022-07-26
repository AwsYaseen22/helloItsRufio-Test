export function addTwoNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  return num1 + num2;
}

export function greaterThan18(arr) {
  return arr.filter((e) => {
    if (!e.age) {
      throw new Error("no age!");
    }
    return e.age > 18;
  });
}
