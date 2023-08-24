'use client'

import { ReactNode } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { textVariant2 } from '@/utils/motion';


type Props = {
    title: string | ReactNode;
    textStyles?: string;
};

const TitleText: NextPage<Props> = ({ title, textStyles }) => (<motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
>
    {title}
</motion.h2>
);
export default TitleText
