'use strict';

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
// * each key is an array of Numbers: 
// * A is the far-left, 
// * B is the middle, 
// * C is the far-right stack
// * Each number represents the largest to smallest tokens: 
// * 4 is the largest, 
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let moveCount = 0;

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?

// Declaring a function movePiece with parameters of startStack and endStack
// that will take the last value of the startStack array and push it to the 
// end of the endStack array
const movePiece = (startStack, endStack) => {
  // variable that stores the last value of the starting stack array
  let movingPiece = stacks[startStack].pop()
  // pushing the the value of movingPiece to the end of the ending stack array
  stacks[endStack].push(movingPiece)
  // Your code here

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2

// Decalaring the function isLegal with parameters of startStack and endStack that determine if a move if legal
const isLegal = (startStack, endStack) => {
  // if statement that determines if the stack you are moving a piece to is empty. If it is empty, 
  // it will return true
  if (stacks[endStack].length === 0) {
    return true
    // Else if statement that determines if piece at the destination stack is bigger than the piece
    // at the source stack.  If the destination piece is larger than the source piece being moved
    // on top of it, it will return true.
  } else
    if (stacks[endStack].slice(-1) > stacks[startStack].slice(-1)) {
      return true
      // If niether of the two conditions are met, it will return false.
    } else return false
  // Your code here

}

// What is a win in Towers of Hanoi? When should this function run?

//Declaring a function that checks for a win
const checkForWin = () => {
  // If statement that determines if the either stack 'b' or stack 'c' have
  // all four pieces.  If either stack is equal to four, it returns true, 
  // else it will return false.
  if (stacks['b'].length === 4 || stacks['c'].length === 4) {
    return true
  } else return false

  // Your code here

}

// When is this function called? What should it do with its argument?

// Declaring a function towersOfHanoi with parameters startStack and endStack that starts the puzzle
const towersOfHanoi = (startStack, endStack) => {
  // if the isLegal function is true, it will invoke the movePiece function to move a piece from the 
  // starting stack to the end stack
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    moveCount++
    // It will then invoke the checkForWin function to see if all four pieces are on the stack
    if (checkForWin()) {
      console.log(`Congrats, you are a winner and did it ${moveCount} moves!! `)
    }
    //if isLegal function is false, it will display error message to try again
  } else {
    console.log('Move not valid. Please try again.')
  }
  // Your code here

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
