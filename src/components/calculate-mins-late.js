module.exports = function calculateMinsLate(scheduled, arrival) {
  var scheduledTimes = scheduled.split(":");
  var arrivalTimes = arrival.split(":");
  var difference = (arrivalTimes[1] - scheduledTimes[1]) + 60 * (arrivalTimes[0] - scheduledTimes[0]);
  return difference;
}
