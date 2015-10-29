module.exports = function findStopPosition(index, arraySize) {
  if (index === 0) {
    return 'first-'
  } else if (index === arraySize - 1) {
    return 'last-'
  } else {
    return ''
  }
};
