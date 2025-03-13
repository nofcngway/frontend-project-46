const processingData = (diff) => {
  const result = {};
  diff.forEach((item) => {
    result[item.key] = item.data;
  });

  return result;
};

const formatJson = (diff) => {
  const obj = processingData(diff);
  return JSON.stringify(obj, null, 2);
};

export default formatJson;
