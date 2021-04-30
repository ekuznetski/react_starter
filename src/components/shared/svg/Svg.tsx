import React, { memo, SVGAttributes } from "react";

export const Svg = memo((props: SVGAttributes<SVGElement>) => {
  const { href } = props;
  if (!href) return null;
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const SvgComponent = require(`../../../assets/images/${href}`);
  return <SvgComponent.ReactComponent {...props} />;
});
