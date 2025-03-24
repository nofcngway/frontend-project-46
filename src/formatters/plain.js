import _ from 'lodash';

const processingData = (data) => {
  if (_.isPlainObject(data)) {
    return '[complex value]';
  }

  if (typeof data === 'string') {
    return `'${data}'`;
  }

  return data;
};

const formatPlain = (diff, path = []) => {
  const filteredData = diff.filter((item) => item.type !== 'general');
  const formattedOutput = filteredData.map((item) => {
    const node = path.concat(item.key);
    const newPath = node.join('.');

    if (item.type === 'add') {
      return `Property '${newPath}' was added with value: ${processingData(item.children)}`;
    }

    if (item.type === 'remove') {
      return `Property '${newPath}' was removed`;
    }

    if (item.type === 'different') {
      return `Property '${newPath}' was updated. From ${processingData(item.children.first)} to ${processingData(item.children.second)}`;
    }

    return formatPlain(item.children, node);
  }).join('\n');

  return formattedOutput;
};

export default formatPlain;
