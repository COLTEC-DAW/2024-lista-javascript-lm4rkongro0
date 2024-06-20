function toList(array) {
  if (array.length === 0) {
    return null;
  }

  function arrayToList(index) {
    if (index >= array.length) {
      return null;
    }
    
    return{
      value: array[index],
      rest: arrayToList(index + 1)
    };
  }

  return arrayToList(0);
}