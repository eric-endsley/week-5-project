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

  lifeExpect(age, lifeSpan, planet) {
    if (age > lifeSpan) {
      let planetLifeBeyond = Math.round((age - lifeSpan) / this[planet + "Const"]);
      let planetToCap = planet.charAt(0).toUpperCase() + planet.slice(1);
      return `You have lived ${planetLifeBeyond} ${planetToCap}-years past your life expectancy. Congrats.`
    } else if (lifeSpan > age) {
      let planetLifeExpect = Math.round((lifeSpan - age) / this[planet + "Const"]);
      let planetToCap = planet.charAt(0).toUpperCase() + planet.slice(1);
      return `You should hve ${planetLifeExpect} years left to live on ${planetToCap}.`;
    } else {
      return "You are at the end of your rope."
    }
  } 
}