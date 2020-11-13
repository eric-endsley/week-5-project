export class SpaceAge {
  constructor(age) {
    this.age = age;
    this.mercuryAge = Math.round(age / 0.24);
    this.venusAge = Math.round(age / 0.62);
    this.marsAge = Math.round(age / 1.88);
    this.jupiterAge = Math.round(age / 11.86);
  }
};
