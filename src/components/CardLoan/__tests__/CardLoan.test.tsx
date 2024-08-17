import React from 'react';
import { render, screen } from '@testing-library/react';
import LoanEnum from '../../../common/enums/LoanEnum';
import CardLoan from '../CardLoan';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mockProps = {
  id: '1',
  title: 'Car Loan',
  money: 25000,
  automobile: {
    imageSource: 'car.jpg',
    mileage: 15000,
    year: '2020',
    make: 'Toyota',
    accord: 'Camry'
  },
  apr: '3.5',
  timeRemaining: '36',
  index: 0,
  moveCard: jest.fn()
};

describe('CardLoan Component', () => {
  test('renders correctly with given props', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <CardLoan {...mockProps} />
      </DndProvider>
    );

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText('$25,000.00/month')).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.automobile.year} ${mockProps.automobile.make} ${mockProps.automobile.accord}`)).toBeInTheDocument();
    expect(screen.getByText(`Estimated ${mockProps.automobile.mileage} mil`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.apr} %`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.timeRemaining} mo`)).toBeInTheDocument();
    expect(screen.getByText(LoanEnum.START_SAVING)).toBeInTheDocument();
  });
});
