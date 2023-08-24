'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect } from 'react';
interface WorldCardProps {
    imageUrl: string;
    placeName: string;
    numberOfPeople: number;
    shadowColors: {
        top: string;
        bottom: string;
    };
    position: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right';
    };
    offset: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
}

const WorldCard: NextPage<WorldCardProps> = ({
    imageUrl,
    placeName,
    numberOfPeople,
    shadowColors,
    position,
    offset,
}) => {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024); 
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cardStyles: React.CSSProperties = {
        position: 'absolute',
        width: '200px',
        height: '150px',
        [position.vertical]: offset?.[position.vertical] || 0,
        [position.horizontal]: offset?.[position.horizontal] || 0,
        boxShadow: `-7px -5px 50px -1px ${shadowColors.top}, 11px 11px 50px 0px ${shadowColors.bottom}`,
        borderRadius: '24px',
        
    };
 

    return (
        <section>
            {isLgScreen && (
                <div style={cardStyles}>
                    <div className={`absolute w-full h-full rounded-[24px] border-8 border-zinc-600 p-4`}>
                            <Image fill src={imageUrl} alt={placeName} className='object-cover rounded-[16px]' />
                        <div className='relative'>
                            <div className='text-container'>
                                <h2 className='font-semibold text-center mt-10 text-white'>{placeName}</h2>
                                <p className='text-center mt-1 text-white'>{`+ ${numberOfPeople} has joined`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WorldCard;
