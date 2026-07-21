import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children }) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        margin: "-20% 0px -20% 0px",
    });

    return (
        <motion.div
            ref={ref}
            animate={{
                opacity: isInView ? 1 : 0.35,
                y: isInView ? 0 : 20,
                filter: isInView ? "blur(0px)" : "blur(2px)",
            }}
            initial={{
                opacity: 0,
                y: 20,
                filter: "blur(2px)",
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}