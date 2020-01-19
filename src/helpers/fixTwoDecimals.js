import isNumber from './isNumber';

const fixTwoDecimals = (number = 0) => {
  if (!isNumber(number)) {
    return 0;
  }

  return (+(number).toFixed(2));
};

export default fixTwoDecimals;
