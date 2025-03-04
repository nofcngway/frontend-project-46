import _ from 'lodash';

const getDiff = (firstData, secondData) => {
  const keys = _.sortBy(_.union(_.keys(firstData), _.keys(secondData)));

  const diff = keys.map((key) => {
    if (!_.has(firstData, key)) {
      return `  + ${key}: ${secondData[key]}`;
    }

    if (!_.has(secondData, key)) {
      return `  - ${key}: ${firstData[key]}`;
    }

    if (firstData[key] === secondData[key]) {
      return `    ${key}: ${secondData[key]}`;
    }

    if (_.has(firstData, key) && _.has(secondData, key) && firstData[key] !== secondData[key]) {
      return `  - ${key}: ${firstData[key]}\n  + ${key}: ${secondData[key]}`;
    }

    return [];
  });

  return `{\n${diff.join('\n')}\n}`;
};

export default getDiff;
