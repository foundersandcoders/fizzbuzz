QUnit.module( "FizzBuzz", function (assert) {
  QUnit.test( "when 1, returns 1", function (assert) {
    assert.equal( fizzbuzz(1), 1, "Test passed: returns 1" );
  });
  QUnit.test( "when 2, returns 2", function (assert) {
    assert.equal( fizzbuzz(2), 2, "Test passed: returns 2" );
  });
  QUnit.test( "when 3, returns Fizz", function (assert) {
    assert.equal( fizzbuzz(3), "Fizz", "Test passed: returns Fizz" );
  });
});
