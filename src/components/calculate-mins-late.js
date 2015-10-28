module.exports = function calculateMinsLate(scheduled, departure) {
  var scheduledTimes = scheduled.split(":");
  var departureTimes = departure.split(":");
  var difference = (departureTimes[1] - scheduledTimes[1]) + 60 * (departureTimes[0] - scheduledTimes[0]);
  return difference;
}
