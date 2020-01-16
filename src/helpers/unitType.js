const getUnitType = (unit) => {
  if (unit === 'kilo') {
    return '/Kg';
  }

  return '';
};

export default getUnitType;
