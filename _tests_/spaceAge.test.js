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
  test('should construct a SpaceAge object with property mercuryAge equal to age parameter divided by 0.24', () => {
  expect(spaceAge.mercuryAge).toEqual(85)
  });
});


