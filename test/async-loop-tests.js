var expect = require('chai').expect;
var asyncLoop = require('../src/asyncLoop.js');


describe('asyncLoop', function() {
  it('should run until break is called', function(done) {
    var count = 0;
    asyncLoop(function(_break, _continue) {
      if (++count>2) {
        _break();
      } else {
        _continue();
      }
    }, function() {
      expect(count).to.equal(3);
      done()
    });
  });

  it('should not callback again after stopped', function(done) {
    var count = 0;
    asyncLoop(function(_break,_continue) {
      ++count;
      _break();
      _continue();
    }, function() {
      expect(count).to.equal(1);
      done();
    })
  })
});
