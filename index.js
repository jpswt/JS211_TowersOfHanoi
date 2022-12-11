// * This js file is incomplete. It will log to the console the elements you click
// call another function and set stone. You will have to work through the logic
// of the game as you know it from building it in the terminal. Work through the
// puzzle slowly, stepping through the flow of logic, and making the game work.
// Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null;

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
	const currentRow = row.getAttribute('data-row');

	console.log('Yay, we clicked an item', row);
	console.log("Here is the stone's id: ", row.id);
	console.log("Here is the stone's data-size: ", currentRow);
	if (!stone) {
		pickUpStone(row.id);
	} else {
		dropStone(row.id);
	}
	checkForWin(row);
};

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
	const selectedRow = document.getElementById(rowID);
	stone = selectedRow.lastElementChild;
	console.log(stone);
	selectedRow.removeChild(stone);
};

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
	console.log('The stone you dropped is', stone);
	let currentRow = document.getElementById(rowID);
	let lastStone = currentRow.lastElementChild;
	// define the last stone size as a number datatype.

	if (!lastStone) {
		// if there is no 'last stone' on the row (no stone at all), then this is a legal move, so append the stone.
		currentRow.appendChild(stone);
	} else {
		let lastStoneSize = parseInt(lastStone.getAttribute('data-size'));
		// define current stone size as a number datatype
		let currentStoneSize = parseInt(stone.getAttribute('data-size'));
		if (lastStoneSize > currentStoneSize) {
			currentRow.appendChild(stone);
		} else {
			document.getElementById('announce-game-won').innerHTML =
				'Illegal Move, Please try again.';
			setTimeout(() => {
				document.getElementById('announce-game-won').innerHTML = '';
			}, 1500);
			return;
		}
	}
	stone = null;
};

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
const checkForWin = (row) => {
	let stone1 = document.getElementById('1');
	let stone2 = document.getElementById('2');
	let stone3 = document.getElementById('3');
	let stone4 = document.getElementById('4');
	console.log(stone1, stone2, stone3, stone4);
	if (row.id !== 'bottom-row') {
		if (
			row.children.item(0) === stone4 &&
			row.children.item(1) === stone3 &&
			row.children.item(2) === stone2 &&
			row.children.item(3) === stone1
		) {
			document.getElementById('announce-game-won').innerHTML = 'You won!!';
		}
	}
};

const reset = () => {
	let stone1 = document.getElementById('1');
	let stone2 = document.getElementById('2');
	let stone3 = document.getElementById('3');
	let stone4 = document.getElementById('4');
	const startingRow = document.getElementById('bottom-row');
	if (stone1 && stone2 && stone3 && stone4) {
		stone1.remove();
		stone2.remove();
		stone3.remove();
		stone4.remove();
		startingRow.appendChild(stone4);
		startingRow.appendChild(stone3);
		startingRow.appendChild(stone2);
		startingRow.appendChild(stone1);
	}
	document.getElementById('announce-game-won').innerHTML = '';
};
