import _ from 'lodash';

const createIndent = (depth) => `  ${' '.repeat(4 * (depth - 1))}`;
const formatLine = (key, data, char, depth) => `${createIndent(depth)}${char} ${key}: ${data}`;
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
  const items = diff.flatMap(({ key, children, type }) => {
    const chars = { add: '+', remove: '-', general: ' ' };

    if (type === 'different') {
      return [
        formatLine(key, processingData(children.first, depth + 1), chars.remove, depth + 1),
        formatLine(key, processingData(children.second, depth + 1), chars.add, depth + 1),
      ];
    }

    if (type === 'complex') {
      return formatLine(key, formatDiff(children, depth + 1), ' ', depth + 1);
    }

    return formatLine(key, processingData(children, depth + 1), chars[type], depth + 1);
  });

  const body = items.join('\n');
  return wrapWithBraces(body, depth);
};

const formatStylish = (diff) => formatDiff(diff);

export default formatStylish;
