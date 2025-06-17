function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

console.log("------------Basic 4------------");
showMessage("Good!");
console.log("🚀 ~ calc(5, 3);:", calc(5, 3));
console.log("🚀 ~ customError ~ customError:", customError);
