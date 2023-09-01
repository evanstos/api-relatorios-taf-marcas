import irrfRetValuesRepository from '../repositories/irrfRetValues.repository.js';

async function getIrrfRetValues() {
  const IrrfRetValues = await irrfRetValuesRepository.getIrrfRetValues();

  return IrrfRetValues;
}

export default { getIrrfRetValues };
