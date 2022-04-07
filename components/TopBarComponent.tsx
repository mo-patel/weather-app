import { FC } from "react";
import { BiCurrentLocation } from 'react-icons/bi';

interface TopBarComponentProps {

}

export const TopBarComponent: FC<TopBarComponentProps> = () => {
    return (
        <div className="flex flex-row absolute top-0 w-full">
            <div className="flex w-full md:w-[33%] justify-between">
                <button className="p-2 m-2 text-sm bg-tx-grey">Search Location</button>
                <BiCurrentLocation className="p-1 m-3 text-4xl bg-tx-grey rounded-full" />
            </div>
            <div className="hidden md:flex w-[67%] justify-end">
                <button className="p-1 m-3 text-md w-12 bg-tx-grey rounded-full">°C</button>
                <button className="p-1 m-3 text-md w-10 bg-tx-grey rounded-full">°F</button>
            </div>
        </div>
    );
}