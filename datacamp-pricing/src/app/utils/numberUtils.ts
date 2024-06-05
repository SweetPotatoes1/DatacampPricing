export const getFirstTwoDecimals = (num: number) => {
  if (Number.isInteger(num)) {
    return '';
  }
  // Convert number to string with at least 2 decimal places
  let numStr = num.toFixed(2);

  // Extract the decimal part
  let decimalPart = numStr.split('.')[1].substring(0, 2);

  // Return the decimal part as a string
  return decimalPart;
};
