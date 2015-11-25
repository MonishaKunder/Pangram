var expect    = require("chai").expect;
var check = require("../app/pangram.js");
describe("Pangram checker", function() {
  it("Check whether the given sentence is Pangram (true condition)", function() {
    var val=check("The quick brown fox jumps over the lazy dog")
    expect(val).to.equal(true);
  });
  it("Check whether the given sentence is Pangram (false condition)", function() {
    var val=check("I am Indian")
    expect(val).to.equal(false);
  });

});