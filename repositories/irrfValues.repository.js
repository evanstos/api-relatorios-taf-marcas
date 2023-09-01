import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function getData() {
  const data = JSON.parse(await readFile('./db/irrfValues.json'));
  return data;
}

async function getIrrfValues() {
  const data = await getData();

  return data;
}

export default { getIrrfValues };
