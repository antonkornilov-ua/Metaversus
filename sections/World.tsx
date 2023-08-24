'use client';

import { TitleText, TypingText } from '@/components';
import styles from '@/styles/styles';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mapImage from './../public/World_map_with_points.svg';
import WorldCard from '@/components/WorldCard';

const World = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer(1.4, 1)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TypingText title='| People on the World' textStyles='text-center' />

                <TitleText
                    title={<>Track friends around you and invite them to play together in the same world</>}
                    textStyles='text-center'
                />

                <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className='relative mt-[68px] flex w-full h-full'>
                    <Image src={mapImage} alt='map' className='w-full h-full object-cover' />
                    <div
                        className='
                        absolute top-5 left-32 
          min-[375px]:top-5 min-[375px]:left-40
          min-[425px]:top-8 min-[425px]:left-[290px]
          md:top-12 md:left-[325px]
          lg:top-20 lg:left-[450px]
          xl:top-24 xl:left-[680px]
          w-[35px] h-[35px]
          lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <Image src='/people-01.png' alt='people' className='w-full h-full' width={50} height={50} />
                    </div>
                    <div
                        className='absolute bottom-8 right-8 
          sm:bottom-10 sm:right-10
          md:bottom-12 md:right-12
          lg:bottom-14 lg:right-14
          xl:bottom-28 xl:right-36
          w-[35px] h-[35px]
          lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]"'>
                        <Image src='/people-02.png' alt='people' className='w-full h-full' width={50} height={50} />
                    </div>
                    <div
                        className='absolute top-10 left-14 
          sm:top-12 sm:left-16
          md:top-20 md:left-24
          lg:top-20 lg:left-30
          xl:top-24 xl:left-36
          w-[35px] h-[35px]
          lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <Image src='/people-03.png' alt='people' className='w-full h-full' width={50} height={50} />
                    </div>
                    <WorldCard
                        imageUrl='/planet-02.png'
                        placeName='The upside down'
                        numberOfPeople={325}
                        shadowColors={{ top: 'rgba(57, 37, 130, 0.5)', bottom: 'rgba(175, 68, 180, 0.5)' }}
                        position={{ vertical: 'bottom', horizontal: 'left' }}
                        offset={{ bottom: 0, left: 15 }}
                    />
                    <WorldCard
                        imageUrl='/planet-05.png'
                        placeName='Hawkins Lab'
                        numberOfPeople={240}
                        shadowColors={{ top: 'rgba(57, 37, 130, 0.5)', bottom: 'rgba(175, 68, 180, 0.5)' }}
                        position={{ vertical: 'top', horizontal: 'right' }}
                        offset={{ top: 0, right: 0 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default World;
