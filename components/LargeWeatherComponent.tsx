import Image from "next/image";
import { FC } from "react";
import { IoLocationSharp } from 'react-icons/io5'

interface LargeWeatherComponentProps {

}
//bg-[url('/images/CloudBg.png')] bg-cover bg-no-repeat [opacity: 0.3]
export const LargeWeatherComponent: FC<LargeWeatherComponentProps> = () => {
    return (
        <div className="flex flex-col bg-card-blue h-full">
            <div className="after:bg-[url('/images/CloudBg.png')] after:bg-cover after:bg-no-repeat
            after:w-full after:h-full after:[opacity: 0.3] w-full h-1/2 relative">
                <Image src="/images/LightRain.png" alt="LightRain" width={202} height={234}  />
            </div>
            <p>16°C</p>
            <p>Shower</p>
            <div className="flex flex-row justify-around">
                <p>Today</p>
                <p>Fri 5 Jun</p>
            </div>
            <div className="flex flex-row">
                <IoLocationSharp />
                <p>London</p>
            </div>
            
        </div>
    );
}