import { FC } from "react";
import { ImCross } from 'react-icons/im';
import { SearchOptionComponent } from "./SearchOptionComponent";

interface SearchComponentProps {
    show: boolean;
    closeMenu: () => void;
}

export const SearchComponent: FC<SearchComponentProps> = ({show, closeMenu}) => {
    return (
        <div className={`bg-card-blue z-20 p-4 w-screen md:w-2/5 h-screen flex flex-col absolute transition-all ease-in-out duration-700 transform slide ${show ? "translate-x-1/12" : "-translate-x-full"}`}>
            <div onClick={() => closeMenu()} className="w-full flex pb-4 justify-end"><ImCross /></div>
            
            <div className="flex flex-row justify-around">
                <input className="border-white border bg-transparent rounded-md w-3/4" type="text" name="citySearch" placeholder="Search Location" />
                <button className="text-lg bg-blue-700 p-2">Submit</button>
            </div>
            <div>
                <SearchOptionComponent />
                {//gen'd options go here
                }
            </div>
        </div>
    );
}