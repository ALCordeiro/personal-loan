import React, { useState, FC, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownHeader, DropdownIcon, DropdownList, DropdownListItem, FloatingLabel } from './styles';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder: string;
}

const CustomDropdown: FC<CustomDropdownProps> = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsFocused(true);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsFocused(true);
    onSelect(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsFocused(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownHeader isFocused={isFocused || isOpen} onClick={handleToggle}>
        <FloatingLabel isFocused={isFocused || isOpen} isSelected={!!selectedOption}>
          {placeholder}
        </FloatingLabel>
        {selectedOption && selectedOption.label}
        <DropdownIcon open={isOpen}>▼</DropdownIcon>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
