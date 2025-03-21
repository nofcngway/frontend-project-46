import fs from 'fs';
import path from 'path';
import parseData from './parsers.js';
import getDiff from './diff.js';
import getFormat from './formatters/index.js';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf8');
  const format = path.extname(absolutePath).slice(1);

  return parseData(fileContent, format);
};

const compareFiles = (filepath1, filepath2, formatName = 'stylish') => {
  const firstData = parseFile(filepath1);
  const secondData = parseFile(filepath2);

  const diff = getDiff(firstData, secondData);
  return getFormat(diff, formatName);
};

export default compareFiles;
