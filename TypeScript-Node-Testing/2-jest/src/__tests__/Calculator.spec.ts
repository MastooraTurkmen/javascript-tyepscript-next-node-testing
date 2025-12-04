import Calculator from "../Calculator";

describe("Calculator", () => {
  let calculator: Calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("Calculator", () => {
    let calculator: Calculator;
    beforeEach(() => {
      calculator = new Calculator();
    });

    describe("initial state", () => {
      it("initializes with value 0", () => {
        expect(calculator.value).toBe(0);
      });
    });

    describe("add method", () => {
      it("should add two numbers correctly", () => {
        expect(calculator.add(5)).toBe(5);
        expect(calculator.add(3)).toBe(8);
      });

      it("handles negative and decimal numbers", () => {
        expect(calculator.add(-2)).toBe(-2); // 0 + (-2) = -2
        expect(calculator.add(2.5)).toBeCloseTo(0.5); // -2 + 2.5 = 0.5
      });
    });

    describe("subtract method", () => {
      it("should subtract numbers correctly", () => {
        calculator.add(10);
        expect(calculator.subtract(4)).toBe(6);
        expect(calculator.subtract(6)).toBe(0);
      });

      it("handles subtracting negative numbers", () => {
        expect(calculator.subtract(-5)).toBe(5); // 0 - (-5) = 5
      });
    });

    describe("isPositive method", () => {
      it("returns false for 0", () => {
        expect(calculator.isPositive()).toBe(false);
      });

      it("returns true for positive values and false for negative values", () => {
        calculator.add(1);
        expect(calculator.isPositive()).toBe(true);
        calculator.subtract(2);
        expect(calculator.isPositive()).toBe(false);
      });
    });
  });
});
