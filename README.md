**Author**: [@skibinska](https://github.com/skibinska)  
**Maintainer**: [@skibinska](https://github.com/skibinska)

# FizzBuzz

Using Test Driven Development to solve FizzBuzz.

## Defining the problem

Before we start, and for the ones who are not familiar with the FizzBuzz problem, the idea is to display numbers from 1 to 100, but

- for multiples of 3 we will display the word **Fizz** instead of the number,
- for multiples of 5 we will output **Buzz** instead of the number and
- for multiples of 3 and 5 we will display **FizzBuzz**.

An example:
```javascript
fizzbuzz(1); // Output: 1
fizzbuzz(2); // Output: 2
fizzbuzz(3); // Output: Fizz
```
## Defining the tool

**Test-driven development (TDD)** is basically a methodology or a software development process that is based on the **repetition** of the following tasks:

- write a simple test that defines an expected functionality/outcome
- make the test fail (it will fail as we haven’t written any code just yet!)
- write your code as simple as possible to make your test pass
- refactor your code and run the same test again (it should pass as even though is refactored the functionality should be the same).

This is also called the **Red-Green-Refactor** cycle of TDD.

![TTD CYCLE](https://cloud.githubusercontent.com/assets/10700103/23134527/09fabe52-f78d-11e6-90d8-b747714a52f6.png)

> The key concept is to write your **unit test before** you write a line of implementation **code**.

## Let’s get started!

### 1. Clone

Clone the repository by copy-pasting the following command into your terminal:
```
git clone https://github.com/skibinska/fizzbuzz.git && cd fizzbuzz
```
### 2. Go to test/tests.js

#### Iteration 1

We will start by writing the most simple unit test of all, a unit test that will output the first number:

```javascript
QUnit.test( "when 1, returns 1", function (assert) {
    assert.equal( fizzbuzz(1), 1, "Test passed: returns 1" );
});
```
**Run the test by opening qunit.html.**

Our first fail is because **fizzbuzz is not defined**.

So we need to add the method to index.js file:

```javascript
function fizzbuzz () {}
```
This make the test fail too because it expect **1** but got **undefined**.

Now let’s write the simplest possible code to make the test pass:

```javascript
function fizzbuzz () {
  return 1;
}
```
Yeaah! The test passed!

#### Iteration 2

Let’s now get the first two numbers.

> Remember always write the unit test first!

Add to test/tests.js the unit test to check if our fanction ruturns 2:

```javascript
QUnit.test( "when 2, returns 2", function (assert) {
   assert.equal( fizzbuzz(2), 2, "Test passed: returns 2" );
});
```
The test fails because it expects **2** but gets **1**.

We need to write just enough code to pass this test.

Update index.js:

```javascript
function fizzbuzz (number) {
  if (number === 2) {
    return 2;
  }
  return 1;
}
```
That does just enough to pass the test.

#### Iteration 3

Well, that was easy! but not quite there yet, let’s now get the first three numbers, but as the third number is multiple of 3 we will have to output **Fizz** instead of the number 3.

Let' write a test

```javascript
QUnit.test( "when 3, returns Fizz", function (assert) {
    assert.equal( fizzbuzz(3), "Fizz", "Test passed: returns Fizz" );
});
```
The test fails because it expects **Fizz** but gets **1**.

Let's write enough code to pass this test.

```javascript
function fizzbuzz (number) {
  if (number === 3) {
    return "Fizz";
  }
  else if (number === 2) {
    return 2;
  }
  return 1;
}
```
Good stuff, our tests pass but our code is getting harder to read (this is where the last step in each iteration comes on board: refactoring),

> **refactoring** means rearranging our code so its easily readable by us (humans);

so how can we make this easier to read?

I’m thinking of removing some of the if/else statement, let’s try that:

```javascript
function fizzbuzz (number) {
 if (number === 3) {
    return "Fizz";
  }
  else {
    return number;
  }
}
```
Isn’t this easier to read? Yes!, and running our unit tests confirm that we haven’t broken anything as all of them still pass!

Once you have your process nailed:

- Write a test and watch it fail
- Write just enough code to pass the test (without breaking any other test that was already passing!)

You can continue working on solving this problem!
