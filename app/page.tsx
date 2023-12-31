'use client';

import Head from "next/head";
import React, { useEffect, useState } from "react";

import Snowfall from 'react-snowfall';
import ReactPlayer from 'react-player';
import Image from "next/image";

export default function Home() {
  const [topVal, setTopVal] = useState('top-32');
  const [bottomVal, setBottomVal] = useState('top-0');

  const [isNewYear, setNewYear] = useState(false);


  const newYear = () => {
    setTopVal('top-0');
    setBottomVal('-top-64');
  }

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };


  useEffect(() => {
    setTimeout(() => {
      newYear();

      setNewYear(true);
    }, 3000);
  }, [isNewYear])

  return (
    <>
      <Snowfall />

      <main className="flex w-full min-h-screen flex-col items-center justify-between p-20">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-between items-center w-[22rem] h-32 overflow-y-hidden text-[10rem] font-black text-yellow-200  text">
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

        <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-xl">
          Tanxin & Nixnat wishes you a <br /> HAPPY NEW YEAR
        </div>

        <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-xl">
          featuring 9th A & 3TAV
        </div>

        <div className="flex justify-center items-center w-full mt-4 text-center text-white font-bold text-xl">
          <Image className="flex justify-center items-center w-80 h-80"
            width={100}
            height={100}
            src={'https://pusheen.com/wp-content/uploads/2022/12/Happy_New_Year_2023.gif'}
            alt=""
          />
        </div>

        <ReactPlayer url={'s1.mp3'} playing={true} />
        <ReactPlayer url={'s2.mp3'} playing={isNewYear} />
        <ReactPlayer url={'s3.mp3'} playing={true} />
        <ReactPlayer url={'s4.mp3'} playing={true} />
        <ReactPlayer url={'s5.mp3'} playing={true} />
        <ReactPlayer url={'s6 .mp3'} playing={true} />
      </main>
    </>
  )
}
