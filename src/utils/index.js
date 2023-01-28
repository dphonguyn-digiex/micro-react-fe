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

export const clsx = (...classes) => {
  if (Array.isArray(classes)) {
    return classes.filter(cl => cl !== false).join(' ')
  }
  else return classes
}
