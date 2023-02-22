import { initializeTimes, updateTimes } from './BookingPage';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingPage';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('BookingForm', () => {
  test('Renders the BookingForm', () => {
      render(<BookingForm />);
      const headingElement = screen.getByText("Reservation");
      expect(headingElement).toBeInTheDocument();
  })
});

describe('BookingForm', () => {
  test('Name field has required attribute', () => {
    const { getByLabelText } = render(<BookingForm/>);
    const nameInput = getByLabelText('Name');
    expect(nameInput).toHaveAttribute('required');
  });
});

describe('BookingForm', () => {
  test('Phone field has required attribute', () => {
    const { getByLabelText } = render(<BookingForm/>);
    const nameInput = getByLabelText('Phone');
    expect(nameInput).toHaveAttribute('required');
  });
});

describe('BookingForm', () => {
  test('Choose time field has required attribute', () => {
    const { getByLabelText } = render(<BookingForm/>);
    const timeSelect = getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('required');
  });
});

describe('BookingForm', () => {
  test('Number of guests field has required attribute', () => {
    const { getByLabelText } = render(<BookingForm/>);
    const guestsInput = getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '12');
  });
});

describe('BookingForm', () => {
  test('Occasion field has required attribute', () => {
    const { getByLabelText } = render(<BookingForm/>);
    const occasionSelect  = getByLabelText('Occasion');
    expect(occasionSelect ).toHaveAttribute('required');
    expect(occasionSelect).toContainHTML('<option>Birthday</option>');
    expect(occasionSelect).toContainHTML('<option>Anniversary</option>');
  });
});

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

describe('Full BookingForm submission', () => {
  it('submit the form with valid data', () => {
    const submitForm = jest.fn();
    const { container, getByLabelText, getByText } = render(
      <BookingForm
        date={new Date()}
        handleDateChange={() => {}}
        defaultTime={'12:00'}
        availableTimes={['12:00', '13:00']}
        defaultGuests={'2'}
        defaultOccasion={'Birthday'}
        availableOcassions={['Birthday', 'Anniversary']}
        onSubmit={submitForm}
      />
    );

    // Fill in form fields
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Michal' } });
    const phoneInput = getByLabelText('Phone');
    fireEvent.change(phoneInput, { target: { value: '224444444' } });
    const timeSelect = getByLabelText('Choose time');
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    const guestsInput = getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '2' } });
    const occasionSelect = getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Submit form
    const form = container.querySelector('form');
    expect(fireEvent.submit(form));
  });

  it('should prevent if the Name field is empty', () => {
    const submitForm = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm
        date={new Date()}
        handleDateChange={() => {}}
        defaultTime={'12:00'}
        availableTimes={['12:00', '13:00']}
        defaultGuests={'2'}
        defaultOccasion={'Birthday'}
        availableOcassions={['Birthday', 'Anniversary']}
        onSubmit={submitForm}
      />
    );

    // Fill in form fields without Name provided
    const phoneInput = getByLabelText('Phone');
    fireEvent.change(phoneInput, { target: { value: '224444444' } });
    const timeSelect = getByLabelText('Choose time');
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    const guestsInput = getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '2' } });
    const occasionSelect = getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Submit form
    const submitButton = getByText('Make Your reservation');
    fireEvent.click(submitButton);

    // Verify onSubmit function was not called
    expect(submitForm).not.toHaveBeenCalled();
  });
});
