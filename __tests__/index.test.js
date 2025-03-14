import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compareFiles from '../src/index.js';
import formatJson from '../src/formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish - json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const resultName = getFixturePath('result_stylish.txt');
  const expectedValue = fs.readFileSync(resultName, 'utf8');
  const actualValue = compareFiles(firstFilename, secondFilename);
  expect(actualValue).toEqual(expectedValue);
});

test('stylish - yml', () => {
  const firstFilename = getFixturePath('file1.yml');
  const secondFilename = getFixturePath('file2.yml');
  const resultName = getFixturePath('result_stylish.txt');
  const expectedValue = fs.readFileSync(resultName, 'utf8');
  const actualValue = compareFiles(firstFilename, secondFilename);
  expect(actualValue).toEqual(expectedValue);
});

test('plain - json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const formatName = 'plain';
  const resultName = getFixturePath('result_plain.txt');
  const expectedValue = fs.readFileSync(resultName, 'utf8');
  const actualValue = compareFiles(firstFilename, secondFilename, formatName);
  expect(actualValue).toEqual(expectedValue);
});

test('plain - yml', () => {
  const firstFilename = getFixturePath('file1.yml');
  const secondFilename = getFixturePath('file2.yml');
  const formatName = 'plain';
  const resultName = getFixturePath('result_plain.txt');
  const expectedValue = fs.readFileSync(resultName, 'utf8');
  const actualValue = compareFiles(firstFilename, secondFilename, formatName);
  expect(actualValue).toEqual(expectedValue);
});

test('json - json', () => {
  const diff = [
    { key: 'host', data: 'hexlet.io', char: 'general' },
    { key: 'timeout', data: { first: 50, second: 20 }, char: 'different' },
    { key: 'proxy', data: '123.234.53.22', char: 'add' },
    { key: 'verbose', data: true, char: 'remove' },
  ];

  const actualValue = formatJson(diff);
  const expectedValue = `[
  {
    "key": "host",
    "data": "hexlet.io",
    "char": "general"
  },
  {
    "key": "timeout",
    "data": {
      "first": 50,
      "second": 20
    },
    "char": "different"
  },
  {
    "key": "proxy",
    "data": "123.234.53.22",
    "char": "add"
  },
  {
    "key": "verbose",
    "data": true,
    "char": "remove"
  }
]`;

  expect(actualValue).toEqual(expectedValue);
});
