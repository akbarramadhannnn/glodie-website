import React, { memo } from "react";
import Image from "next/image";

const Index = ({
  src = "",
  alt = "",
  className = "",
  width = 1000,
  height = 1000,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      layout="responsive"
      sizes="100vh"
    />
  );
};

export default memo(Index);
