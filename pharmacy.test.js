import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
  it("Benefit should decrease twice after expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });
  it("Benefit is never negative", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });
  it("Herbal Tea increases in Benefit before expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("Herbal Tea increases in Benefit before expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("Magic Pill never decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 40)]);
  });
  it("Magic Pill never expires in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 0, 40)]);
  });
  it("Fervex increases in Benefit by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 35)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 37)]);
  });
  it("Fervex increases in Benefit by 3 when there are 3 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 43)]);
  });
  it("The Benefit of an item is never more than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 50)]);
  });
  it("Benefit drops to 0 after the expiration date of Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("Dafalgan decreases in Benefit by 2", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 4, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 3, 38)]);
  });
  it("Dafalgan decreases in Benefit by 4 after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 46)]);
  });
  it("Benefit is never negative", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 0)]);
  });
});
