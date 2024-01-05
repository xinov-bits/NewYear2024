'use client';

import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Lora, Alfa_Slab_One } from 'next/font/google'
const blocky = Alfa_Slab_One({ weight: '400', subsets: ['latin'] })

import Snowfall from 'react-snowfall';
import Image from "next/image";

import Confetti from 'react-confetti'
// import dynamic from 'next/dynamic'
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  // const [topVal, setTopVal] = useState('top-32');
  // const [bottomVal, setBottomVal] = useState('top-0');

  // const [isNewYear, setNewYear] = useState(false);

  // const newYear = () => {
  //   setTopVal('top-0');
  //   setBottomVal('-top-64');
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     newYear();
  //     setNewYear(true);
  //   }, 3000);
  // }, []);

  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  // const { width, height } = useWindowSize()

  return (
    <>
      {/* <Snowfall /> */}
      {seconds <= 0 && <Confetti
        width={1920}
        height={1080}
      />}

      <main className="flex w-full h-full flex-col items-center justify-between p-0 lg:p-20 overflow-hidden">
        {/* <div className="block justify-center items-center w-[80%] lg:w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex justify-between items-center w-[12rem] lg:w-[22rem] h-32 overflow-y-hidden text-[5.5rem] lg:text-[10rem] font-black text-[hotpink]  text">
              <div className="flex justify-start items-center w-full">
                20
              </div>

              <div className="relative flex justify-end items-center w-full">
                <div className={`absolute z-[1] ${bottomVal} bottom-0 right-0 flex justify-end items-center w-full duration-500`}>
                  23
                </div>

                <div className={`absolute z-[2] ${topVal} bottom-0 right-0 flex justify-end items-center w-full duration-500`}>
                  24
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-lg lg:text-xl">
            Tanxin & Nixnat wishes you a <br /> HAPPY NEW YEAR
          </div>

          <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-lg lg:text-xl">
            featuring 9th A & 3TAV
          </div>

          <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-lg lg:text-xl">
            <Image className="flex justify-center items-center w-80 h-80 rounded-md"
              width={100}
              height={100}
              src={'https://pusheen.com/wp-content/uploads/2022/12/Happy_New_Year_2023.gif'}
              alt=""
            />
          </div>
        </div>

        <ReactPlayer url={'s1.mp3'} playing={true} /> */}

        <div className={`${blocky} 'countdown'`}>
          {seconds >= 1 ? (
            <div className={'number'}>{seconds}</div>
          ) : (
            <div className="happyBirthday text-center  leading-tight text-[3rem] ">
              <div className="flex justify-center items-center mt-44">
                🎉 Happy Birthday<br />
                Abhinav (nixnat)!
              </div>

              <div className="flex justify-center items-center">
                <Image src="/ac.webp" alt="" width={100} height={100} />
              </div>
            </div>

          )}
        </div>
      </main>
    </>
  )
}
function useWindowSize(): { width: any; height: any; } {
  throw new Error("Function not implemented.");
}

