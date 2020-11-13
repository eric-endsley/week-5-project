export class SpaceAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge = Math.round(age / 0.24);
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }
};
