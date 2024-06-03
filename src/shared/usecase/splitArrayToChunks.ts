export default (array: any[], chunkSize = 4) => {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);

    while (chunk.length < chunkSize) {
      chunk.push(undefined);
    }

    result.push(chunk);
  }

  return result;
};
