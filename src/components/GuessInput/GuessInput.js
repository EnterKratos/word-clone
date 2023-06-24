import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log({ guess: guess })
        setGuess('');
      }}
    >
      <label
        htmlFor="guess-input"
      >
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        required
        placeholder="_ _ _ _ _"
        title="Must be a 5 letter word"
        pattern="^[a-zA-Z]{5}$"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
