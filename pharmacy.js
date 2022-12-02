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
    // for (var i = 0; i < this.drugs.length; i++) {
    //   if (
    //     this.drugs[i].name != "Herbal Tea" &&
    //     this.drugs[i].name != "Fervex"
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == "Fervex") {
    //         if (this.drugs[i].expiresIn < 11) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //         if (this.drugs[i].expiresIn < 6) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.drugs[i].name != "Magic Pill") {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != "Herbal Tea") {
    //       if (this.drugs[i].name != "Fervex") {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != "Magic Pill") {
    //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //           }
    //         }
    //       } else {
    //         this.drugs[i].benefit =
    //           this.drugs[i].benefit - this.drugs[i].benefit;
    //       }
    //     } else {
    //       if (this.drugs[i].benefit < 50) {
    //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       }
    //     }
    //   }
    // }

    return this.drugs;
  }
}
