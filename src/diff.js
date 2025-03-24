import _ from 'lodash';

const getDiff = (firstData, secondData) => {
  const keys = _.sortBy(_.union(_.keys(firstData), _.keys(secondData)));

  const diff = keys.flatMap((key) => {
    if (!_.has(firstData, key)) {
      return { key, children: secondData[key], type: 'add' };
    }

    if (!_.has(secondData, key)) {
      return { key, children: firstData[key], type: 'remove' };
    }

    if (firstData[key] === secondData[key]) {
      return { key, children: secondData[key], type: 'general' };
    }

    if (_.isPlainObject(firstData[key]) && _.isPlainObject(secondData[key])) {
      return { key, children: getDiff(firstData[key], secondData[key]), type: 'complex' };
    }

    return { key, children: { first: firstData[key], second: secondData[key] }, type: 'different' };
  });

  return diff;
};

export default getDiff;
