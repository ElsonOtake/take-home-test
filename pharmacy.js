export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      drug.expiresIn--;
      switch(drug.name) {
        case "Magic Pill":
          drug.expiresIn++;
          break;
        case "Herbal Tea":
          if (drug.benefit != 50) {
            if (drug.expiresIn < 0) {
              if (drug.benefit < 48) {
                drug.benefit += 2;
              } else {
                drug.benefit = 50;
              }
            } else {
              drug.benefit++;
            }
          }
          break;
        case "Fervex":
          if (drug.benefit != 0) {
            if (drug.expiresIn < 0) {
              drug.benefit = 0;
            } else if (drug.benefit != 50) {
              drug.benefit++;
              if (drug.expiresIn < 6) {
                drug.benefit += 2;
              } else if (drug.expiresIn < 11) {
                drug.benefit += 1;
              }
              if (drug.benefit > 50) {
                drug.benefit = 50;
              }
            }
          }
          break;
        case "Dafalgan":
          if (drug.benefit != 0) {
            drug.benefit -= 2;
            if (drug.expiresIn < 0) {
              drug.benefit -= 2;
            }
            if (drug.benefit < 0) {
              drug.benefit = 0;
            }
          }
          break;
        default:
          if (drug.benefit != 0) {
            drug.benefit--;
            if (drug.expiresIn < 0) {
              drug.benefit--;
            }
            if (drug.benefit < 0) {
              drug.benefit = 0;
            }
          }
      }
    })

    return this.drugs;
  }
}
