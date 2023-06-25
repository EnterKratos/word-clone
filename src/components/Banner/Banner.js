import React from "react";

function Banner({variant = 'happy', children}) {
  return (
    <div className={`${variant} banner`}>
      <p>
        {children}
      </p>
    </div>
  );
}

export default Banner;
