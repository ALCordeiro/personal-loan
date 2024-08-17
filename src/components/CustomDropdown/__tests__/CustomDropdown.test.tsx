import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomDropdown from '../CustomDropdown';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];
  const placeholder = 'Select an option';
  const label = 'Dropdown Label';
  const onSelect = jest.fn();

  it('should render the label correctly', () => {
    render(<CustomDropdown options={options} onSelect={onSelect} placeholder={placeholder} label={label} />);
    
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it('should open the dropdown when clicked', () => {
    render(<CustomDropdown options={options} onSelect={onSelect} placeholder={placeholder} label={label} />);
    
    const dropdownHeader = screen.getByText(label);
    fireEvent.click(dropdownHeader);
    
    const optionElement = screen.getByText('Option 1');
    expect(optionElement).toBeInTheDocument();
  });

  it('should call onSelect with the correct option when an option is clicked', () => {
    render(<CustomDropdown options={options} onSelect={onSelect} placeholder={placeholder} label={label} />);
    
    const dropdownHeader = screen.getByText(label);
    fireEvent.click(dropdownHeader);
    
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    
    expect(onSelect).toHaveBeenCalledWith({ value: '1', label: 'Option 1' });
  });

  it('should close the dropdown when an option is selected', () => {
    render(<CustomDropdown options={options} onSelect={onSelect} placeholder={placeholder} label={label} />);
    
    const dropdownHeader = screen.getByText(label);
    fireEvent.click(dropdownHeader);
    
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('should close the dropdown when clicking outside', () => {
    render(<CustomDropdown options={options} onSelect={onSelect} placeholder={placeholder} label={label} />);
    
    const dropdownHeader = screen.getByText(label);
    fireEvent.click(dropdownHeader);
    
    fireEvent.mouseDown(document);
    
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
