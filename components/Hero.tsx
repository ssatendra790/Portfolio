import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles'
import MyPhoto from '../Assets/Satendra_photo_final.png';
import Image from 'next/image';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "<Hey Myself Satendra>",
            "<A Web Developer/>",
            "<Algorithm Aficionado>",
            "<iCompetitive Programmer/>",
            "<iLoveCoffee>"],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className='h-screen flex flex-col space-y- items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={MyPhoto} alt="satendra" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Undergraduate</h2>
                <h1 className='text-5xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="yellow" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}