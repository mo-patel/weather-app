import Image from "next/image";
import { FC } from "react";

interface WeeklyForecastComponentProps {

}

export const WeeklyForecastComponent: FC<WeeklyForecastComponentProps> = () => {
    return (
        <div className="bg-card-blue w-1/2 h-1/2 flex flex-col justify-center">
            <p className="self-center">Wed </p>
            <Image src="/images/hail.png" className="max-w-50 max-h-40" height={50} width={40} objectFit="contain" alt="hail" />
            <div className="flex flex-row justify-around">
                <p>16°C</p>
                <p>11°C</p>
            </div>
        </div>
    );
}