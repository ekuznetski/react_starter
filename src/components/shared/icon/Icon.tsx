import React from "react";

export const Icon = ({ name }: { name: string }) => {
  return (
    <svg>
      <use href={`./assets/images/sprite.svg#icon-${name}`} />
    </svg>
  );
};
