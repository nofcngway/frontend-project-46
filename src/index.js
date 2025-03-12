import fs from 'fs';
import path from 'path';
import parseData from './parsers.js';
import getDiff from './diff.js';
import getFormat from './formatters/index.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const compareFiles = (filepath1, filepath2, formatName = 'stylish') => {
  const firstPath = getAbsolutePath(filepath1);
  const firstData = parseData(readFile(firstPath), getFileFormat(firstPath));

  const secondPath = getAbsolutePath(filepath2);
  const secondData = parseData(readFile(secondPath), getFileFormat(secondPath));

  const diff = getDiff(firstData, secondData);

  return getFormat(diff, formatName);
};

export default compareFiles;
