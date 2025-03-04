import fs from 'fs';
import path from 'path';
import parseData from './parsers.js';
import getDiff from './diff.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const compareFiles = (filepath1, filepath2) => {
  const firstPath = getAbsolutePath(filepath1);
  const firstData = parseData(readFile(firstPath), getFileFormat(firstPath));

  const secondPath = getAbsolutePath(filepath2);
  const secondData = parseData(readFile(secondPath), getFileFormat(secondPath));

  return getDiff(firstData, secondData);
};

export default compareFiles;
