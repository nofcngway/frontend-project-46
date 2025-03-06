import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compareFiles from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('test json', () => {
  const firstFilename = getFixturePath('file1.json');
  const secondFilename = getFixturePath('file2.json');
  const resultName = getFixturePath('result.txt');
  const result = fs.readFileSync(resultName, 'utf8');
  expect(compareFiles(firstFilename, secondFilename)).toEqual(result);
});
