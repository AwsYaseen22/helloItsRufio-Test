export function addTwoNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  return num1 + num2;
}
