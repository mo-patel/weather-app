import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";
import { IoLocationSharp } from 'react-icons/io5'
import { Forecast } from "../types/Weather";

interface LargeWeatherComponentProps {
    today: Forecast;
    location: string;
}
export const LargeWeatherComponent: FC<LargeWeatherComponentProps> = ({today, location}) => {
    return (
        <div className="flex flex-col bg-card-blue h-full pt-14">
            <div className="relative">
                <div className="absolute top-0 bottom-0 right-0 -left-8 opacity-10 bg-[url('/images/CloudBg.png')] bg-cover bg-no-repeat"></div>
                <div className="relative z-3 self-center w-full flex justify-center">
                    <Image src={`/images/${today.weather_state_abbr}.png`} alt="LightRain" width={202} height={234}  />
                </div>
            </div>
            <div className="items-center text-center">
            <p className="font-raleway p-16"><span className="text-8xl font-medium">{today.the_temp.toFixed(0)}</span><span className="font-thin text-tx-grey text-2xl">°C</span></p>
            <p className="font-medium text-[#A09FB1] text-3xl p-11">{today.weather_state_name}</p>
            <div className="flex flex-row justify-around text-tx-grey p-6">
                <p>Today</p>
                <p> . </p>
                <p>{format(new Date(), 'ccc co LLL')}</p>
            </div>
            <div className="flex flex-row justify-center text-tx-grey p-5">
                <IoLocationSharp />
                <p className="ml-1">{location}</p>
            </div>
            </div>
        </div>
    );
}