import { Power3, TweenMax } from "gsap";
import { useEffect, useRef } from "react";

const usePageAnimation = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    TweenMax.from(ref1.current, 1, { opacity: 0, y: 100 });
    TweenMax.to(ref1.current, 1, {
      opacity: 1,
      y: 0,
      delay: 20,
      ease: Power3.easeOut,
    });

    TweenMax.from(ref2.current, 0.8, { opacity: 0, y: 100 });
    TweenMax.to(ref2.current, 0.8, {
      opacity: 1,
      y: 0,
      delay: 20,
      ease: Power3.easeInOut,
    });

    TweenMax.from(ref3.current, 0.8, { opacity: 0, y: 70 });
    TweenMax.to(ref3.current, 0.8, {
      opacity: 1,
      y: 0,
      delay: 10,
      ease: Power3.easeOut,
    });
  }, [ref1, ref2, ref3]);

  return { ref1, ref2, ref3 };
};

const useHeadingAnimation = () => {
  const ref1 = useRef(null);

  useEffect(() => {
    TweenMax.from(ref1.current, 1, { opacity: 0, y: -100 });
    TweenMax.to(ref1.current, 1, {
      opacity: 1,
      y: 0,
      delay: 20,
      ease: Power3.easeOut,
    });
  }, [ref1]);

  return ref1;
};

const useSectionAnimation = () => {
  const ref1 = useRef(null);

  useEffect(() => {
    TweenMax.from(ref1.current, 1, { opacity: 0, y: 100 });
    TweenMax.to(ref1.current, 1, {
      opacity: 1,
      x: 0,
      delay: 20,
      ease: Power3.easeOut,
    });
  }, [ref1]);

  return ref1;
};

export { useHeadingAnimation, usePageAnimation, useSectionAnimation };
