import irrfValuesRepository from '../repositories/irrfValues.repository.js';

async function getIrrfValues() {
  const IrrfValues = await irrfValuesRepository.getIrrfValues();

  return IrrfValues;
}

export default { getIrrfValues };
