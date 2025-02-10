const isEvenOrOdd = require("./problem");

describe("isEvenOrOdd", () => {
    test("should return 'Even' for even numbers", () => {
        expect(isEvenOrOdd(2)).toBe("Even");
        expect(isEvenOrOdd(8)).toBe("Even");
        expect(isEvenOrOdd(100)).toBe("Even");
    });

    test("should return 'Odd' for odd numbers", () => {
        expect(isEvenOrOdd(1)).toBe("Odd");
        expect(isEvenOrOdd(5)).toBe("Odd");
        expect(isEvenOrOdd(99)).toBe("Odd");
    });

    test("should handle zero correctly", () => {
        expect(isEvenOrOdd(0)).toBe("Even");
    });

    test("should handle negative numbers", () => {
        expect(isEvenOrOdd(-4)).toBe("Even");
        expect(isEvenOrOdd(-7)).toBe("Odd");
    });
});
