import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";
import { convertToFar } from "../utils/functions";

interface WeeklyForecastComponentProps {
    wDate: string;
    minTemp: number;
    theTemp: number;
    weatherAbbr: string;
    farenheight: boolean;
}

export const WeeklyForecastComponent: FC<WeeklyForecastComponentProps> = ({wDate, minTemp, theTemp, weatherAbbr, farenheight}) => {
    return (
        <div className="bg-card-blue flex flex-col justify-center basis-5/12 md:basis-36 m-4 p-1">
            <p className="self-center">{format(new Date(wDate), 'ccc co LLL')}</p>
            <Image src={`/images/${weatherAbbr}.png`} className="max-w-55 max-h-60" height={55} width={60} objectFit="contain" alt="hail" />
            <div className="flex flex-row justify-between">
                <p>{farenheight ? convertToFar(theTemp).toFixed(0) : theTemp.toFixed(0) }°{farenheight ? 'F' : 'C'}</p>
                <p className="text-[#A09FB1]">{farenheight ? convertToFar(minTemp).toFixed(0) : minTemp.toFixed(0)}°{farenheight ? 'F' : 'C' }</p>
            </div>
        </div>
    );
}