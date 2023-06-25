import React from "react";
import { range } from "../../utils";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

function Guess({value = undefined}) {
  return (
    <p className="guess">
      {range(NUM_OF_CHARACTERS_ALLOWED).map((i) => {
        const status = value?.results[i].status;
        return <span key={i} className={`cell${' ' + status}`}>{value ? value.guess[i] : undefined}</span>
      })}
    </p>
  );
}

export default Guess;
