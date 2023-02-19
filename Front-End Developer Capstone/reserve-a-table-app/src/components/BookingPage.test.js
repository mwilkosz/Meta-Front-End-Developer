import { initializeTimes, updateTimes } from './BookingPage';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingPage';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Renders the BookingForm reservation heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  test('returns an array of times', () => {
    const result = initializeTimes();
    expect(result).not.toHaveLength(0);
  });
});

describe('updateTimes', () => {
  test('returns an array of times', () => {
    const testDate = new Date('2023-02-19T00:00:00');
    const state = [];
    const result = updateTimes(state, testDate);
    expect(result).not.toHaveLength(0);
  });
});