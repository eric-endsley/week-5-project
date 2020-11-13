import { TestScheduler } from 'jest';
import { SpaceAge } from '../src/js/spaceAge.js'

describe ('SpaceAge', () => {
  let spaceAge
  beforeEach(() => {
     spaceAge = new SpaceAge(20);
  });
  test('should construct a SpaceAge object with property age equal to age parameter', () => {
  expect(spaceAge.age).toEqual(20)
  });
  test('should construct a SpaceAge object with properties mercuryAge, venusAge, marsAge & jupiterAge equal to 0', () => {
  expect(spaceAge.mercuryAge).toEqual(1)
  expect(spaceAge.venusAge).toEqual(1)
  expect(spaceAge.marsAge).toEqual(1)
  expect(spaceAge.jupiterAge).toEqual(1)
  });
});