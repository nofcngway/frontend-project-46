import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compareFiles from '../src/index.js';
import formatJson from '../src/formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  // [стиль, расширение, имя файла результата, формат (если нужен)]
  ['stylish', 'json', 'result_stylish.txt', undefined],
  ['stylish', 'yml', 'result_stylish.txt', undefined],
  ['plain', 'json', 'result_plain.txt', 'plain'],
  ['plain', 'yml', 'result_plain.txt', 'plain'],
])('%s - %s', (style, ext, resultFile, format) => {
  const firstFilename = getFixturePath(`file1.${ext}`);
  const secondFilename = getFixturePath(`file2.${ext}`);
  const expectedValue = fs.readFileSync(getFixturePath(resultFile), 'utf8');
  const actualValue = compareFiles(firstFilename, secondFilename, format);
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
  const expectedValue = fs.readFileSync(getFixturePath('fileForJsonFormat.txt'), 'utf8');

  expect(actualValue).toEqual(expectedValue);
});
