import { TestScheduler } from 'jest';
import { SpaceAge } from '../src/js/spaceAge.js'

describe ('SpaceAge', () => {
  test('should construct a SpaceAge object with property age equal to age parameter', () => {

  let spaceAge = new SpaceAge(20);
  expect(spaceAge.age).toEqual(19)
  });
});