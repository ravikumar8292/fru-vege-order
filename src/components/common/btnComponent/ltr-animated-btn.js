import React from "react";
import { motion } from "framer-motion";


function LTRAnimatedBtn({name}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, backgroundColor: "[#80B500]" }}
      animate={{ y: 0.5, opacity: 1 }}
      transition={{
        scale: { type: "spring", stiffness: 300 },
        duration: 1.5,
      }}
      // className="bg-headerCtaButtonBg text-white h-[52px] w-[198px] font-medium"
      className="relative bg-transparent border py-2.5 px-3 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-headerCtaButtonBg before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:border hover:border-gray-800 before:hover:scale-x-100"
    >
      {name}
    </motion.button>
  );
}

export default LTRAnimatedBtn;
