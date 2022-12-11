'use strict';

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

// Starting stacks with all pieces on stack 'a' to start game
let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: [],
};

// Setting a move counter to 0, no moves have occurred at start of game
let moveCount = 0;

// Start here. What is this function doing?
// Declaring a function printStacks that print out the stacks and starting pieces at beginning of game
const printStacks = () => {
	console.log('a: ' + stacks.a);
	console.log('b: ' + stacks.b);
	console.log('c: ' + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = () => {
	// Your code here
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
	// Your code here
};

// What is a win in Towers of Hanoi? When should this function run?

//Declaring a function that checks for a win.  It should run after each piece is moved.
const checkForWin = () => {
	// Your code here
};

// When is this function called? What should it do with its argument?

// Declaring the game function towersOfHanoi with parameters startStack and endStack that starts the puzzle
// The argument prompts the user for stack inputs
const towersOfHanoi = (startStack, endStack) => {
	// Your code here
};

const getPrompt = () => {
	printStacks();
	rl.question('start stack: ', (startStack) => {
		rl.question('end stack: ', (endStack) => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
};

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
				c: [],
			};
			assert.equal(isLegal('a', 'b'), false);
		});
		it('should allow a legal move', () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: [],
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
