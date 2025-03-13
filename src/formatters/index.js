import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const getFormat = (diff, formatName) => {
  const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
  };

  return formatters[formatName](diff);
};

export default getFormat;
