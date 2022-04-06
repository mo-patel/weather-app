import Image from "next/image";
import { FC } from "react";
import { IoLocationSharp } from 'react-icons/io5'

interface LargeWeatherComponentProps {

}
//bg-[url('/images/CloudBg.png')] bg-cover bg-no-repeat [opacity: 0.3]

//<div className="after:bg-[url('/images/CloudBg.png')] after:bg-contain after:bg-no-repeat
//after:w-full after:h-full after:[opacity: 0.3] after:absolute after:[z-index: -1] after:top-0 after:bottom-0 after:left-0 after:right-0 block w-full h-1/2 relative">
export const LargeWeatherComponent: FC<LargeWeatherComponentProps> = () => {
    return (
        <div className="flex flex-col bg-card-blue h-full pt-14">
            <div className="relative">
                <div className="absolute top-0 bottom-0 right-0 -left-8 opacity-10 bg-[url('/images/CloudBg.png')] bg-cover bg-no-repeat"></div>
                <div className="relative z-10 self-center w-full flex justify-center">
                    <Image src="/images/LightRain.png" alt="LightRain" width={202} height={234}  />
                </div>
            </div>
            <div className="items-center text-center">
            <p className="font-raleway p-16"><span className="text-8xl font-medium">16</span><span className="font-thin text-tx-grey text-2xl">°C</span></p>
            <p className="font-medium text-[#A09FB1] text-3xl p-11">Shower</p>
            <div className="flex flex-row justify-around text-tx-grey p-6">
                <p>Today</p>
                <p> . </p>
                <p>Fri 5 Jun</p>
            </div>
            <div className="flex flex-row justify-center text-tx-grey p-5">
                <IoLocationSharp />
                <p className="ml-1">London</p>
            </div>
            </div>
        </div>
    );
}