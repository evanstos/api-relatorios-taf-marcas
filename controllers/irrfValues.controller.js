import inssValuesService from '../services/irrfValues.service.js';

async function getIrrfValues(req, res, next) {
  try {
    res.send(await irrfValuesService.getIrrfValues());
  } catch (err) {
    next(err);
  }
}

export default { getIrrfValues };
