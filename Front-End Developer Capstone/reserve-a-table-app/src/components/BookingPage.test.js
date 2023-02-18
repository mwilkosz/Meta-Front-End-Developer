import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes', () => {
  test('returns an array of times', () => {
    const expected = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expected);
  });
});

describe('updateTimes', () => {
  test('returns an array of times', () => {
    const state = [];
    const action = {};
    const expected = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = updateTimes(state, action);
    expect(result).toEqual(expected);
  });
});