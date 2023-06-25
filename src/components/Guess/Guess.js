import React from "react";
import { range } from "../../utils";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

function Guess({value = undefined}) {
  return (
    <p className="guess">
      {range(NUM_OF_CHARACTERS_ALLOWED).map((i) => {
        return <span key={i} className="cell">{value ? value[i] : undefined}</span>
      })}
    </p>
  );
}

export default Guess;
