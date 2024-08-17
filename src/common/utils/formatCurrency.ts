const formatCurrency = (value: string): string => {
  if (!value) return '';

  // Remove todos os caracteres não numéricos exceto ponto decimal
  const numericValue = value.replace(/[^0-9.-]+/g, '');

  const floatValue = parseFloat(numericValue);

  if (isNaN(floatValue)) return '';

  return floatValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default formatCurrency;
