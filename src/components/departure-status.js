var calculateMinsLate = require('./calculate-mins-late');

module.exports = function departureStatus(scheduled, departure) {
  if(scheduled === departure) {
    return 'On time';
  }
  else {
    return calculateMinsLate(scheduled, departure) + ' min late';
  }
}
