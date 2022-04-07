import Image from "next/image";
import { FC } from "react";

interface WeeklyForecastComponentProps {

}

export const WeeklyForecastComponent: FC<WeeklyForecastComponentProps> = () => {
    return (
        <div className="bg-card-blue flex flex-col justify-center basis-5/12 md:basis-36 m-4 p-1">
            <p className="self-center">Wed </p>
            <Image src="/images/hail.png" className="max-w-55 max-h-60" height={55} width={60} objectFit="contain" alt="hail" />
            <div className="flex flex-row justify-between">
                <p>16°C</p>
                <p className="text-[#A09FB1]">11°C</p>
            </div>
        </div>
    );
}