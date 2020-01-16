const getUnitType = (unit = '') => {
  if (!unit || typeof unit !== 'string') {
    return '';
  }

  if (unit.toLowerCase() === 'kilo') {
    return '/Kg';
  }

  return '';
};

export default getUnitType;
