"use client";
import { motion } from "motion/react"
import { useState, useEffect } from "react";
export default function Template({ children }) {
    const someusedName = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[someusedName]);
    return (
        <motion.div
            key={someusedName}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2       , ease: [0.25, 0.1, 0.25, 1], }}
        >
            {children}
        </motion.div>
                
    );
}



