'use client'

import styles from "@/styles/styles";
import { NextPage } from 'next';
import Image from 'next/image';

interface NewFeaturesProps {
    imgUrl: string;
    title: string;
    subtitle: string
}

const NewFeatures: NextPage<NewFeaturesProps> = ({ imgUrl, title, subtitle }) => (
    <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
            <Image src={imgUrl} width={100} height={100} alt='icon' className='w-1/2 h-1/2 object-contain' />
        </div>
        <h1 className='mt-[26px] font-bold text-[24px] leading-[30.24px] text-white'>{title}</h1>
        <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>{subtitle}</p>
    </div>
);

export default NewFeatures;
