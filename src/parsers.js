import yaml from 'js-yaml';

const parseData = (fileContent, format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  const parser = parsers[format];
  if (!parser) {
    throw new Error(`Unknown parser: ${format}`);
  }

  return parser(fileContent);
};

export default parseData;
