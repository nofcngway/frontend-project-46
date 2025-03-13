import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compareFiles from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish - json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const resultName = getFixturePath('result_stylish.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename)).toEqual(result);
});

test('stylish - yml', () => {
  const firstFilename = getFixturePath('file1.yml');
  const secondFilename = getFixturePath('file2.yml');
  const resultName = getFixturePath('result_stylish.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename)).toEqual(result);
});

test('plain - json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const formatName = 'plain';
  const resultName = getFixturePath('result_plain.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename, formatName)).toEqual(result);
});

test('plain - yml', () => {
  const firstFilename = getFixturePath('file1.yml');
  const secondFilename = getFixturePath('file2.yml');
  const formatName = 'plain';
  const resultName = getFixturePath('result_plain.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename, formatName)).toEqual(result);
});

test('json - json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const formatName = 'json';
  const resultName = getFixturePath('result_json.json');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename, formatName)).toEqual(result);
});

test('json - yml', () => {
  const firstFilename = getFixturePath('file1.yml');
  const secondFilename = getFixturePath('file2.yml');
  const formatName = 'json';
  const resultName = getFixturePath('result_json.json');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename, formatName)).toEqual(result);
});
