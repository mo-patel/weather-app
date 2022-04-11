import { FC, FormEvent, useState } from "react";
import { ImCross } from 'react-icons/im';
import { LocationDetail } from "../types/Weather";
import { SearchOptionComponent } from "./SearchOptionComponent";

interface SearchComponentProps {
    show: boolean;
    closeMenu: () => void;
    setSelectedLoc: (woeId: number) => void;
}

export const SearchComponent: FC<SearchComponentProps> = ({show, closeMenu, setSelectedLoc}) => {
    const [searchResults, setSearchResults] = useState<LocationDetail[]>();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const submitHandler = async (event: FormEvent) => {
        event.preventDefault();
        const searchReq = await fetch("/api/search?term=" + searchTerm);
        if(searchReq.ok){
            setSearchResults(await searchReq.json());
        }
    }
    return (
        <div className={`bg-card-blue z-20 p-4 w-screen md:w-2/5 h-screen flex flex-col absolute transition-all ease-in-out duration-700 transform slide ${show ? "translate-x-1/12" : "-translate-x-full"}`}>
            <div onClick={() => closeMenu()} className="w-full flex pb-4 justify-end"><ImCross /></div>
            
            <form className="flex flex-row justify-around" onSubmit={submitHandler}>
                <input className="border-white border bg-transparent rounded-md w-3/4 p-2" 
                type="text" name="citySearch" placeholder="Search Location" required autoFocus autoCapitalize="on"
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit" className="text-lg bg-blue-700 p-2">Submit</button>
            </form>
            <div>
                {
                    searchResults?.map((item, idx) => (
                        <SearchOptionComponent id={item.woeid} key={idx} selectLocation={setSelectedLoc} />
                    ))
                }
            </div>
        </div>
    );
}