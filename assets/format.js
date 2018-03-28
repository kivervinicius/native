import abbrev from 'number-abbreviate'

export const number = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export const abbrevPrice = (num) =>
  abbrev(num, 2)
    .toString()
    .toUpperCase()
    .replace('.', ',')
