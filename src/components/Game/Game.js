import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const onGuess = guess => {
    if (guesses.some(g => g.guess === guess)) {
      return false;
    }

    const results = checkGuess(guess, answer);

    const newGuesses = [
      ...guesses, {
        guess,
        results,
      }
    ];

    setGuesses(newGuesses);

    if (results.every(r => r.status === 'correct')) {
      setGameStatus('win');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose');
    }

    return true;
  }

  let banner = null;
  if (gameStatus !== 'playing') {
    if (gameStatus === 'win') {
      banner = (
        <Banner variant="happy">
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} {`guess${guesses.length > 1 ? 'es' : ''}`}</strong>.
        </Banner>
      );
    } else {
      banner = (
        <Banner variant="sad">
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      );
    }
  }

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput onGuess={onGuess} disabled={gameStatus !== 'playing'} />
      {banner}
    </>
  );
}

export default Game;
