import styles from '@/styles/styles';
import { NextPage } from 'next';


interface StartStepsProps {
    number: string
    text: string
}

const StartSteps: NextPage<StartStepsProps> = ({ number, text }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
            <p className="font-bold text-[20px] text-white">{number}</p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0b0b0] leading-[32.4px]">{text}</p>
    </div> 
);

export default StartSteps;
