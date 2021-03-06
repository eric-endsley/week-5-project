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
    expect(spaceAge.spaceAgeCalc(20, "mercury")).toEqual("Since you are 20 on Earth, you would be 83 on Mercury.")
    expect(spaceAge.spaceAgeCalc(20, "venus")).toEqual("Since you are 20 on Earth, you would be 32 on Venus.")
    expect(spaceAge.spaceAgeCalc(20, "mars")).toEqual("Since you are 20 on Earth, you would be 11 on Mars.")
    expect(spaceAge.spaceAgeCalc(20, "jupiter")).toEqual("Since you are 20 on Earth, you would be 2 on Jupiter.")
  });
});

describe ('lifeExpect', () => {
  let spaceAge
  beforeEach(() => {
    spaceAge = new SpaceAge()
  });
  test('should return a string stating how many years an average person should have left to live on a given planet, given an age & life expectancy on Earth', () => {
    expect(spaceAge.lifeExpect(20, 75, "mercury")).toEqual("You should have 229 years left to live on Mercury.")
    expect(spaceAge.lifeExpect(20, 75, "venus")).toEqual("You should have 89 years left to live on Venus.")
    expect(spaceAge.lifeExpect(20, 75, "mars")).toEqual("You should have 29 years left to live on Mars.")
    expect(spaceAge.lifeExpect(20, 75, "jupiter")).toEqual("You should have 5 years left to live on Jupiter.")
  });
  test('should return a string which states how many years a person has lived beyond their average life expectancy on a given planet if they have done so, rounded to the nearest integer', () => {
    expect(spaceAge.lifeExpect(80, 75, "mercury")).toEqual("You have lived 21 Mercury-years past your life expectancy. Congrats.")
    expect(spaceAge.lifeExpect(80, 75, "venus")).toEqual("You have lived 8 Venus-years past your life expectancy. Congrats.")
    expect(spaceAge.lifeExpect(80, 75, "mars")).toEqual("You have lived 3 Mars-years past your life expectancy. Congrats.")
    expect(spaceAge.lifeExpect(80, 75, "jupiter")).toEqual("You have lived 0 Jupiter-years past your life expectancy. Congrats.")
  });
  test('should return "You are at the end of your rope" if inputted age is equal to life expectancy', () => {
    expect(spaceAge.lifeExpect(75, 75, "mercury")).toEqual("You are at the end of your rope.")
  });
});
