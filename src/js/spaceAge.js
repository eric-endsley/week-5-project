export class SpaceAge {
  constructor() {
    this.mercuryConst = 0.24;
    this.venusConst = 0.62;
    this.marsConst = 1.88;
    this.jupiterConst = 11.86;
  }
  spaceAgeCalc(age, planet) {
    let planetAge = Math.round(age / this[planet + "Const"]);
    let planetToCap = planet.charAt(0).toUpperCase() + planet.slice(1);
    return `Since you are ${age} on Earth, you would be ${planetAge} on ${planetToCap}.`;
  }

//   lifeExpect(lifeSpan, planet) {
//     console.log(this[${planet}Age])
//     lifeSpan - this[planet + Age]
//   }
};
