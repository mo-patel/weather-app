import { FC } from "react";
import { BiCurrentLocation } from 'react-icons/bi';

interface TopBarComponentProps {

}

export const TopBarComponent: FC<TopBarComponentProps> = () => {
    return (
        <div className="flex flex-row absolute top-0 w-full">
            <div className="flex w-1/3 justify-between">
                <button className="p-2 m-2 bg-tx-grey">Search Location</button>
                <BiCurrentLocation className="p-1 m-3 text-4xl bg-tx-grey rounded-full" />
            </div>
            <div className="flex w-2/3 justify-end">
                <button className="p-1 m-3 text-lg w-10 bg-tx-grey rounded-full">°C</button>
                <button className="p-1 m-3 text-lg w-10 bg-tx-grey rounded-full">°F</button>
            </div>
        </div>
    );
}