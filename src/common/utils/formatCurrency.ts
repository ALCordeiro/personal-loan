import convertCurrency from "./convertCurrency";

const formatCurrency = (value: string): string => {
  if (!value) return '';

  const numericValue = value.replace(/[^0-9.-]+/g, '');

  const floatValue = parseFloat(numericValue);

  if (isNaN(floatValue)) return '';

  return convertCurrency(floatValue)
};

export default formatCurrency;
