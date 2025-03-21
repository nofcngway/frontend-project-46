import _ from 'lodash';

const getDiff = (firstData, secondData) => {
  const keys = _.sortBy(_.union(_.keys(firstData), _.keys(secondData)));

  const diff = keys.flatMap((key) => {
    if (!_.has(firstData, key)) {
      return { key, data: secondData[key], char: 'add' };
    }

    if (!_.has(secondData, key)) {
      return { key, data: firstData[key], char: 'remove' };
    }

    if (firstData[key] === secondData[key]) {
      return { key, data: secondData[key], char: 'general' };
    }

    if (_.isPlainObject(firstData[key]) && _.isPlainObject(secondData[key])) {
      return { key, data: getDiff(firstData[key], secondData[key]), char: 'complex' };
    }

    return { key, data: { first: firstData[key], second: secondData[key] }, char: 'different' };
  });

  return diff;
};

export default getDiff;
