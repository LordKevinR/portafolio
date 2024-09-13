import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  //Ajustamos los valores de transformación
  const rotate = useTransform(scrollYProgress, [0, 0.1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  //   const scaleDimensions = () => {
  //     return isMobile ? [0.9, 0.7] : [1.2, 1.05];
  //   };

  //   const rotate = useTransform(scrollYProgress, [0.1, 0], [0, 30]);
  //   const scale = useTransform(scrollYProgress, [0.1, 0], scaleDimensions());
  //   const translate = useTransform(scrollYProgress, [0.5, 0], [-100, 0]);

  // Aplicamos un efecto de resorte (spring) para suavizar las transiciones
  const smoothRotate = useSpring(rotate, {
    stiffness: 1000,
    damping: 20,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 1000,
    damping: 20,
  });
  const smoothTranslate = useSpring(translate, {
    stiffness: 1000,
    damping: 20,
  });

  return (
    <div
      className="flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "500px",
        }}
      >
        <Header translate={smoothTranslate} titleComponent={titleComponent} />
        <Card
          rotate={smoothRotate}
          translate={smoothTranslate}
          scale={smoothScale}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className=""
    >
      <div className="">{children}</div>
    </motion.div>
  );
};
