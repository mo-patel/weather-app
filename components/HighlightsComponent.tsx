import { FC } from "react";
import { Forecast } from "../types/Weather";

interface HighlightsComponentProps {
    forecast: Forecast;
}

export const HighlightsComponent: FC<HighlightsComponentProps> = ({forecast}) => {
    return (
        <div className="w-full">
            <h2 className="p-3 font-bold text-2xl">Todays Highlights</h2>
            <div className="grid grid-cols-2 text-lg">
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Wind Status</h3>
                    <p><span className="text-6xl font-bold">{forecast.wind_speed.toFixed(0)}</span> mph</p>
                    {/* <p>WSW</p> */}
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Humidity</h3>
                    <p><span className="text-6xl font-bold">{forecast.humidity.toFixed(0)}</span>%</p>
                    {/* <p>Progress bar placeholder</p> */}
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Visibility</h3>
                    <p><span className="text-6xl font-bold">{forecast.visibility.toFixed(0)}</span> miles</p>
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Air Pressure</h3>
                    <p><span className="text-6xl font-bold">{forecast.air_pressure.toFixed(0)}</span> mb</p>
                </div>
            </div>
        </div>
    );
}