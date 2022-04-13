# JS211_Towers of Hanoi Pseudo-Code

1. Prompt user for inputs for starting and ending stack
2. Accept the inputs for both stacks
3. Determine if the input is legal and valid(i.e. if starting stack is not equal to zero, if the ending stack where the piece is being moved is empty or
   if the piece being place to the is smaller that the piece it is being stacked on)
4. If the move is illegal, notify the user and end the turn
5. If the move is legal, move piece from the end of the starting stack to the end of the ending stack
6. Once move is complete, check for win by determining if all four pieces are on stack 'b' or stack 'c'
7. If it is a win, notify the user that they won.
