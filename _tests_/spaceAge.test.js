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
 test('should construct a SpaceAge object with property mercuryAge equal to age parameter divided by 0.24 rounded to the nearest integer', () => {
    expect(spaceAge.mercuryAge).toEqual(83)
  });  
  test('should construct a SpaceAge object with property venusAge equal to age parameter divided by 0.62 rounded to the nearest integer', () => {
    expect(spaceAge.venusAge).toEqual(32)
  });
//   test('should construct a SpaceAge object with property marsAge equal to age parameter divided by 1.88 rounded to the nearest integer', () => {
//     expect(spaceAge.marsAge).toEqual(0)
//     });
//   test('should construct a SpaceAge object with property jupiterAge equal to age parameter divided by 11.86 rounded to the nearest integer', () => {
//       expect(spaceAge.jupiterAge).toEqual(0)
//     });
});


