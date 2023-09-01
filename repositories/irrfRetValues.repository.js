import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getData() {
  const data = JSON.parse(await readFile('./db/irrfRetValues.json'));
  return data;
}

async function getIrrfRetValues() {
  const data = await getData();

  return data;
}

export default { getIrrfRetValues };
