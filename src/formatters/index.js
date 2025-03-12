import formatStylish from './stylish.js';

const getFormat = (diff, formatName) => {
  const formatters = {
    stylish: formatStylish,
  };

  return formatters[formatName](diff);
};

export default getFormat;
