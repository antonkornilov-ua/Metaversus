'use client';

import { socials } from '@/constants/socials';
import styles from '@/styles/styles';
import { footerVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import headSet from './../public/headset.svg';

const Footer = () => {
    const date = new Date
    return (
        <motion.div
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            className={`${styles.xPaddings} py-8 relative`}>
            <div className='footer-gradient' />
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Enter Metaverse</h4>
                    <button
                        type='button'
                        className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'>
                        <Image
                            src={headSet}
                            alt='headset'
                            className='w-[24px] h-[24px] object-contain'
                            width={24}
                            height={24}
                        />
                        <span className='font-normal text-[16px] text-white'>Enter Metaverse</span>
                    </button>
                </div>

                <div className='flex flex-col'>
                    <div className='mb-[50px] h-[2px] bg-white opacity-10 ' />
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-extrabold text-[24px] text-white'> Metaversus</h4>
                        <p className='font-normal text-[14px] text-white opacity-50'>
                            Copyright © {date.getFullYear()} Metaversus. All rights reserved. Made by Anton Kornilov.
                        </p>
                        <div className='flex gap-4'>
                            {socials.map((social) => (
                              <a key={social.name} href={social.link} target='_blank' rel='noreferrer'>
                                <Image
                                  src={social.imgUrl}
                                  alt={social.name}
                                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                                  width={24}
                                  height={24}
                                />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
