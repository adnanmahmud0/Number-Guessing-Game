# Number Guessing Game

This is a simple number guessing game where the computer selects a random number between 1 and 100, and the user tries to guess it. The game provides feedback after each guess, indicating whether the guess is "Too high," "Too low," or "Congratulations" if the guess is correct. The game also limits the number of attempts and shows a "Game Over" message if the attempts are exhausted.

## Features

- Random number generation between 1 and 100.
- Input box for user guesses.
- Feedback messages based on the user's guess.
- 10 attempts per game.
- Option to restart the game after a correct guess or game over.

## How to Play

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Enter a guess in the input box and click "Submit Guess."
4. Follow the feedback messages to guide your next guess.
5. If you guess correctly, you’ll receive a "Congratulations" message.
6. If you use all 10 attempts, the game will display "Game Over!" and the correct answer.
7. Click "Restart Game" to play again.

## Technologies Used

- **HTML**: Structure and elements of the page.
- **CSS**: Basic styling for a clean and simple user interface.
- **JavaScript**: Game logic, random number generation, and DOM manipulation for feedback and restart functionality.

## Project Structure

- `index.html`: The main HTML file with the game interface.
- `style.css`: CSS file for styling.
- `script.js`: JavaScript file containing the game logic.

## Example Usage

User enters 50:
- "Too low!"

User enters 75:
- "Too high!"

User enters 60:
- "Congratulations! You guessed it!"

After 10 unsuccessful guesses:
- "Game Over! The correct number was [number]."

## License

This project is open-source and free to use.
