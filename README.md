
**Author**: [@skibinska](https://github.com/skibinska)  
**Maintainer**: [@skibinska](https://github.com/skibinska)


# FizzBuzz

Using Test Driven Development to solve FizzBuzz.

## Pairing

For this task, we recommend that you use the [ping pong](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-1/pair-programming.md) pairing method.

One student starts by creating a single failing test and then the other writes code to make the test pass. When the test is passing the second student writes another failing test for the first to complete. Keep swapping roles until you complete the task.

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

## Tape Testing terminologies

- t.equal(actual, expected, msg)

  Compares flat data structure. It uses the == operator.

- t.deepEqual(actual, expected, msg)

    It is used for testing nested data structure. For example if two objects, and their child objects are equal. It uses the === operator

- t.end(err)

   Declare the end of a test explicitly. If err is passed in t.end will assert that it is falsey.



## Let’s get started!

### 1. Clone

Clone the repository by copy-pasting the following command into your terminal:
```
git clone https://github.com/foundersandcoders/fizzbuzz.git && cd fizzbuzz
```

Install the dependencies (Tape and Tap-spec) with:
`npm install`

Run the example test with:
`npm test`

### 2. Go to test.js

#### Iteration 1

We will start by writing the most simple unit test of all, a unit test that will output the first number:

```javascript
test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(1);
  var expected = 1;
  t.equal(actual, expected, 'Should return 1 when given 1');
  t.end();
});
```
**Run the test with `npm test`**

Our first fail is because **fizzbuzz doesn't return anything**.

So we need to add to the function in  `index.js`:

```javascript
function fizzbuzz() {
  return 1;
}
```

Yeaah! The test passed!

#### Iteration 2

Let’s now get the first two numbers.

> Remember always write the unit test first!

Add a unit test to `test.js` to check if our function returns 2:

```javascript
test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(2);
  var expected = 2;
  t.equal(actual, expected, 'Should return 2 when given 2');
  t.end();
});
```
The test fails because it expects **2** but gets **1**.

We need to write just enough code to pass this test.

Update `index.js`:

```javascript
function fizzbuzz(number) {
  if (number === 2) {
    return 2;
  }
  return 1;
}
```
That does just enough to pass the test.

#### Iteration 3

Well, that was easy, but we're not quite there yet. Let’s now get the first three numbers, but as the third number is multiple of 3 we will have to output **Fizz** instead of the number 3.

Let's write a test:

```javascript
test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(3);
  var expected = 'Fizz';
  t.equal(actual, expected, 'Should return Fizz when given 3');
  t.end();
});
```
The test fails because it expects **Fizz** but gets **1**.

Let's write enough code to pass this test.

```javascript
function fizzbuzz(number) {
  if (number === 3) {
    return "Fizz";
  }
  else if (number === 2) {
    return 2;
  }
  return 1;
}
```
Good stuff; our tests pass but our code is getting harder to read (this is where the last step in each iteration comes on board: refactoring),

> **refactoring** means rearranging our code so it's easily readable by us (humans);

so how can we make this easier to read?

I’m thinking of removing one of the if/else statements, let’s try that:

```javascript
function fizzbuzz(number) {
 if (number === 3) {
    return "Fizz";
  }
  else {
    return number;
  }
}
```
Isn’t this easier to read? Yes! Running our unit tests confirm that we haven’t broken anything as all of them still pass.

Once you have your process nailed:

- Write a test and watch it fail
- Write just enough code to pass the test (without breaking any other test that was already passing!)

You can continue working on solving this problem!
