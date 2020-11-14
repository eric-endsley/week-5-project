import { TestScheduler } from 'jest';
import { SpaceAge } from '../src/js/spaceAge.js'

describe ('SpaceAge', () => {
  let spaceAge
  beforeEach(() => {
     spaceAge = new SpaceAge();
  });
  test('should construct a SpaceAge object with property mercuryConst equal to 0.24, venusConst equal to 0.62, marsConst equal to 1.88, & jupiterConst equal to 11.86 ', () => {
    expect(spaceAge.mercuryConst).toEqual(0.24)
    expect(spaceAge.venusConst).toEqual(0.62)
    expect(spaceAge.marsConst).toEqual(1.88)
    expect(spaceAge.jupiterConst).toEqual(11.86)
  });
});

describe ('spaceAgeCalc', () => {
  let spaceAge
  beforeEach(() => {
    spaceAge = new SpaceAge();
  });
  test('should return a string stating the relative age of a user on a given planet, rounded to the nearest integer, given their age on Earth', () => {
    expect(spaceAge.spaceAgeCalc(20, "mercury")).toEqual("Since you are 20 on Earth, you would be 85 on Mercury.")
  });
});
// describe ('lifeExpect', () => {
//   let spaceAge
//   beforeEach(() => {
//     spaceAge = new SpaceAge(20)
//   });
//   test('should return a string which states how many years a person has to live rounded to the nearest integer, on a given planet, given a life expectancy on Earth', () => {
//     expect(spaceAge.lifeExpect(75, "mercury")).toEqual(229)
//   });
