export const toCamelCaseKey = () => {
  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCaseKey(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCaseKey(obj[key]),
      }),
      {}
    );
  }
  return obj;
}