const stringToDate = (string) => {
  if (typeof string === 'string') {
    const array = string.split('/');
    const newString = [array[1], array[0], array[2]].join('/');
    return new Date(newString);
  } else {
    return string;
  }
};

export default stringToDate;
