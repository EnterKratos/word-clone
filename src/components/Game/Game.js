import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const onGuess = guess => {
    if (guesses.includes(guess)) {
      return false;
    }

    setGuesses([
      ...guesses, {
        guess: guess,
        results: checkGuess(guess, answer),
      }
    ]);
    return true;
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput onGuess={onGuess}/>
    </>
  );
}

export default Game;
