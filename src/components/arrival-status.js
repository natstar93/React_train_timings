var calculateMinsLate = require('./calculate-mins-late');

module.exports = function arrivalStatus(scheduled, arrival) {
  if(scheduled === arrival) {
    return 'On time';
  }
  else {
    return calculateMinsLate(scheduled, arrival) + ' min late';
  }
}
