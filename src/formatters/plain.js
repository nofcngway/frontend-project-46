import _ from 'lodash';

const processingData = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }

  if (typeof data === 'string') {
    return `'${data}'`;
  }

  return data;
};

const formatPlain = (diff, path = []) => {
  const filteredData = diff.filter((item) => item.char !== 'general');
  const gg = filteredData.map((item) => {
    const node = path.concat(item.key);
    const newPath = node.join('.');

    if (item.char === 'add') {
      return `Property '${newPath}' was added with value: ${processingData(item.data)}`;
    }

    if (item.char === 'remove') {
      return `Property '${newPath}' was removed`;
    }

    if (item.char === 'different') {
      return `Property '${newPath}' was updated. From ${processingData(item.data.first)} to ${processingData(item.data.second)}`;
    }

    return formatPlain(item.data, node);
  }).join('\n');

  return gg;
};

export default formatPlain;
