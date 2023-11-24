import React, { useRef } from "react";
import { useIntersectionObserver } from "../utils/useIntersectionObserver";
import { Img } from "./WelcomeStyles";

const LazyImage = ({ src, alt }) => {
  const imageRef = useRef();
  const isIntersecting = useIntersectionObserver(imageRef);

  return (
    <Img
      ref={imageRef}
      src={isIntersecting ? src : ""}
      alt={alt}
      style={{ transition: "opacity 0.5s", opacity: isIntersecting ? 1 : 0 }}
      loading="lazy"
    />
  );
};

export default LazyImage;
