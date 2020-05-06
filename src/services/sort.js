export const handleSort = (data, direction, sortBy) => {
  return data.sort((a,b) => a[sortBy] < b[sortBy] ?
  direction*-1 : direction);
};
