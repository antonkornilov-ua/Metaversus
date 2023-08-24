'use client';

import { motion } from "framer-motion";

import { ReactNode } from "react";
import { NextPage } from "next";
import { textContainer, textVariant2 } from "@/utils/motion";



type Props = {
    title: string | ReactNode;
    textStyles?: string;
};
const TypingText: NextPage<Props> = ({ title, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px]  text-secondary-white ${textStyles}`}
    >
        {Array.from(title as string).map((letter, index) => (
            <motion.span
                variants={textVariant2}
                key={index}
            >{letter === ' ' ? '\u00A0' : letter}</motion.span>
        ) )}

    </motion.p>
);

export default TypingText