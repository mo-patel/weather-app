import { FC } from "react";

interface HighlightsComponentProps {

}

export const HighlightsComponent: FC<HighlightsComponentProps> = () => {
    return (
        <div className="w-full">
            <h2 className="p-3 font-bold text-2xl">Todays Highlights</h2>
            <div className="grid grid-cols-2 text-lg">
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Wind Status</h3>
                    <p><span className="text-6xl font-bold">7</span> mph</p>
                    {/* <p>WSW</p> */}
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Humidity</h3>
                    <p><span className="text-6xl font-bold">84</span>%</p>
                    {/* <p>Progress bar placeholder</p> */}
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Visibility</h3>
                    <p><span className="text-6xl font-bold">6,4</span> miles</p>
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Air Pressure</h3>
                    <p><span className="text-6xl font-bold">998</span> mb</p>
                </div>
            </div>
        </div>
    );
}