import {
  add,
  subtract,
  isEven,
  calculateAverage,
  createJwtToken,
  createUser,
} from "../utils";

describe("utils", () => {
  describe("add", () => {
    test("adds two positive integers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("handles negative values", () => {
      expect(add(-1, 1)).toBe(0);
    });

    test("handles floating point numbers", () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(5, 2)).toBe(3);
    });

    test("result can be negative", () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });

  describe("isEven", () => {
    test("returns true for even numbers", () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
    });

    test("returns false for odd numbers", () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe("calculateAverage", () => {
    test("calculates average of array", () => {
      expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
    });

    test("single element returns that element", () => {
      expect(calculateAverage([5])).toBe(5);
    });

    test("empty array returns 0", () => {
      expect(calculateAverage([])).toBe(0);
    });
  });

  describe("createUser", () => {
    test("creates user object with name and age", () => {
      expect(createUser("Alice", 30)).toEqual({ name: "Alice", age: 30 });
    });

    test("returned object has correct types", () => {
      const user = createUser("Bob", 25);
      expect(typeof user.name).toBe("string");
      expect(typeof user.age).toBe("number");
    });
  });

  describe("createJwtToken", () => {
    test("resolves to a token string", async () => {
      await expect(createJwtToken()).resolves.toBe("jwt_token");
    });

    test("returned token is a non-empty string", async () => {
      const token = await createJwtToken();
      expect(typeof token).toBe("string");
      expect(token.length).toBeGreaterThan(0);
    });
  });
});
