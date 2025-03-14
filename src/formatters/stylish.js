import _ from 'lodash';

const createIndent = (depth) => `  ${' '.repeat(4 * (depth - 1))}`;
const formatLine = (key, data, char, depth) => {
  return `${createIndent(depth)}${char} ${key}: ${data}`;
};
const tabBrackets = (depth) => `${' '.repeat(4 * depth)}`;
const wrapWithBraces = (body, depth) => `{\n${body}\n${tabBrackets(depth)}}`;

const processingData = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }

  const entries = Object.entries(data);
  const items = entries.map(([key, value]) => formatLine(key, processingData(value, depth + 1), ' ', depth + 1));
  const body = items.join('\n');

  return wrapWithBraces(body, depth);
};

const formatDiff = (diff, depth = 0) => {
  const items = diff.flatMap(({ key, data, char }) => {
    const chars = { add: '+', remove: '-', general: ' ' };

    if (char === 'different') {
      return [
        formatLine(key, processingData(data.first, depth + 1), chars.remove, depth + 1),
        formatLine(key, processingData(data.second, depth + 1), chars.add, depth + 1),
      ];
    }

    if (char === 'complex') {
      return formatLine(key, formatDiff(data, depth + 1), ' ', depth + 1);
    }

    return formatLine(key, processingData(data, depth + 1), chars[char], depth + 1);
  });

  const body = items.join('\n');
  return wrapWithBraces(body, depth);
};

const formatStylish = (diff) => formatDiff(diff);

export default formatStylish;
