const parseData = (data, format) => {
  const parsers = { json: JSON.parse(data) };
  return parsers[format];
};

export default parseData;
