import yaml from 'js-yaml';

const parseData = (data, format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  const parser = parsers[format];
  if (!parser) {
    throw new Error(`Unknown parser: ${format}`);
  }

  return parser(data);
};

export default parseData;
