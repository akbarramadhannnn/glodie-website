import React, { Fragment, memo, useCallback, useState } from "react";
import Image from "next/image";
import LoadingImage from "../../public/gif/Rolling-1s-200px.gif";

const Index = ({
  src = "",
  alt = "",
  className = "",
  width = 1000,
  height = 1000,
}) => {
  const [isLoad, setIsLoad] = useState(false);

  const handleLoadImage = useCallback(() => {
    console.log("handleLoadImage");
    setIsLoad(true);
  }, []);

  return (
    <Image
      src={isLoad ? src : LoadingImage.src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      layout="responsive"
      sizes="100vh"
      onLoad={handleLoadImage}
    />
  );
};

export default memo(Index);
