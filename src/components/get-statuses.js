module.exports = function getStatuses(data) {
  var statuses = [];
  data.forEach(function(station, index) {
    var last = (data.length - 1 === index)
    if (station.actual && (last || data[index + 1].actual)) {
      statuses.push('visited');
    } else if ((station.actual && !data[index + 1].actual)) {
      statuses.push('visited-midway');
    } else {
      statuses.push('not-visited');
    }
  });
  return statuses;
};
