import styled from 'styled-components'
import fontSize from '../../common/utils/fontSize';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  ${fontSize(16)}
  box-sizing: border-box;
  margin-bottom: 24px;
`;

export const DropdownHeader = styled.div<{ isFocused: boolean }>`
  padding: 10px;
  height: 56px;
  background: #fff;
  border: 2px solid ${({ isFocused }) => (isFocused ? '#888888' : '#757575')};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: #424242;
  &:focus {
    outline: none;
  }
`;

export const FloatingLabel = styled.span<{ isFocused: boolean; isSelected: boolean }>`
  position: absolute;
  left: 8px;
  top: ${({ isFocused, isSelected }) => (isFocused || isSelected ? '-5px' : '50%')};
  transform: translateY(-50%);
  background: #fff;
  padding: 0 4px;
  transition: top 0.2s ease, font-size 0.2s ease;
  ${({ isFocused, isSelected }) => (isFocused || isSelected ? fontSize(12) : fontSize(16))};
  color: #888888;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  text-align: start;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0 10px 10px #8888;
`;

export const DropdownListItem = styled.li`
  padding: 10px;
  height: 43px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #424242;
  &:hover {
    background: #f1f1f1;
  }
`;

export const DropdownIcon = styled.span<{ open: boolean }>`
  margin-left: auto;
  transition: transform 0.2s ease;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;