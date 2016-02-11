var async = require('async');

asyncLoop = function(action, callback) {
  var stop = false;
  async.whilst(function() {
    return !stop;
  }, function(callback) {
    function _break() {
      stop = true;
      callback()
    }
    function _continue() {
      if (!stop) {
        callback()
      }
    }
    action(_break, _continue);
  }, callback);
};

module.exports = asyncLoop
