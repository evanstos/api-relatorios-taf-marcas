import irrfRetValuesService from '../services/irrfRetValues.service.js';

async function getIrrfRetValues(req, res, next) {
  try {
    res.send(await irrfRetValuesService.getIrrfRetValues());
  } catch (err) {
    next(err);
  }
}

export default { getIrrfRetValues };
