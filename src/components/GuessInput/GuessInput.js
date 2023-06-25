import React, { useState } from "react";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

function GuessInput({onGuess, disabled}) {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log({ guess: guess })
        if(onGuess(guess)) {
          setGuess('');
        } else {
          alert('You already guessed that answer 🙃');
        }
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
        title={`Must be a ${NUM_OF_CHARACTERS_ALLOWED} letter word`}
        pattern={`^[a-zA-Z]{${NUM_OF_CHARACTERS_ALLOWED}}$`}
        minLength={NUM_OF_CHARACTERS_ALLOWED}
        maxLength={NUM_OF_CHARACTERS_ALLOWED}
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
