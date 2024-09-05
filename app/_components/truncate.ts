export const truncateText = (str: string) => {
  if (str !== undefined && str.length < 9) {
    return str;
  } else if (str !== undefined && str.length > 9) {
    return str?.substring(0, 9);
  }
};
