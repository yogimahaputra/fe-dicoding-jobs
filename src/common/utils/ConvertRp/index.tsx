/**
 *
 * @param {number} balance
 * @returns
 */

export const ConvertIDR = (balance: number): string => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 3,
  });

  return formatter.format(balance);
};
