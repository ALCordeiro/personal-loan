import React, { useState, FC, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownHeader, DropdownIcon, DropdownList, DropdownListItem, FloatingLabel } from './CustomDropdown.styles';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder: string;
  label: string;
}

const CustomDropdown: FC<CustomDropdownProps> = ({ options, onSelect, placeholder, label }) => {
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
          {label}
        </FloatingLabel>
        {selectedOption && selectedOption.label}
        <DropdownIcon open={isOpen}>▼</DropdownIcon>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          <DropdownListItem style={{ pointerEvents: 'none', opacity: 0.6 }}>{placeholder}</DropdownListItem>
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

export default React.memo(CustomDropdown);
