import { FC } from "react";

interface HighlightsComponentProps {

}

export const HighlightsComponent: FC<HighlightsComponentProps> = () => {
    return (
        <div className="w-full">
            <h2>Todays Highlights</h2>
            <div className="grid grid-cols-2">
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Wind Status</h3>
                    <p>7 mph</p>
                    <p>WSW</p>
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Humidity</h3>
                    <p>84%</p>
                    <p>Progress bar placeholder</p>
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Visibility</h3>
                    <p>6,4 miles</p>
                </div>
                <div className="bg-card-blue p-5 m-2 flex flex-col items-center">
                    <h3>Air Pressure</h3>
                    <p>998 mb</p>
                </div>
            </div>
        </div>
    );
}