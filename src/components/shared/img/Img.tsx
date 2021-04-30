import React, { ImgHTMLAttributes, memo } from "react";

export const Img = memo(function Img(
  props: ImgHTMLAttributes<HTMLImageElement> & { name: string }
) {
  if (!props.name) return null;
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        height="100%"
        alt={props.alt}
        {...props}
        src={`./assets/images/${props.name}`}
      />
    </>
  );
});
