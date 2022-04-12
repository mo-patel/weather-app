import { FC } from "react";
import { FiChevronRight } from 'react-icons/fi';

interface SearchOptionComponentProps {
    id: number;
    name: string;
    selectLocation: (woeId: number) => void;
}

export const SearchOptionComponent: FC<SearchOptionComponentProps> = ({ id, name, selectLocation }) => {
    return (
        <div className="w-full p-4 mt-4 cursor-pointer"  onClick={()=> selectLocation(id)}>
            <div className="flex flex-row justify-between">
                {name} 
                <FiChevronRight className="self-center text-lg" />
            </div>
        </div>
    );
}