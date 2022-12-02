import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
  it("should decrease the benefit twice as fast after expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });
  it("should not have benefit with negative value", () => {
    expect(
      new Pharmacy([new Drug("test", 10, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 9, 0)]);
  });
});

describe("Herbal Tea", () => {
  it("should decrease the expiresIn and increase the benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should decrease the expiresIn and increase the benefit twice after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("should decrease the expiresIn and increase the benefit to maximum value of 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 50)]);
  });

  describe("Magic Pill", () => {
    it("should never expire nor decrease the benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });
});
