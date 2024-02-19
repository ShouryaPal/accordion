"use client";
import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import minusIcon from "@/assets/images/icon-minus.svg";
import plusIcon from "@/assets/images/icon-plus.svg";
import Image from 'next/image';
type Props = {
    isAccordionOpen?: boolean;
    question: string;
    answer: string;

}

export default function Accordion(props: Props) {
    const [animationParent] = useAutoAnimate();
    const [isAccordionOpen, setAccordionOpen] = useState(props.isAccordionOpen || false);

    function toggleAccordion() {
        setAccordionOpen(!isAccordionOpen);
    }
    return (
        <div ref={animationParent} className='flex flex-col gap-4 py-4 '>
            <p onClick={toggleAccordion} className='flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer '>
                <span>{props.question}</span>
                {
                    isAccordionOpen ? (
                        <Image src={minusIcon} alt='minus-icon' className='h-6 w-auto' />
                    ) :
                        <Image src={plusIcon} alt='plus-icon' className='h-6 w-auto' />
                }
            </p>
            {isAccordionOpen && (
                <p className='text-sm sm:text-base text-gray-400'>
                    {props.answer}
                </p>
            )}
        </div>
    )
}