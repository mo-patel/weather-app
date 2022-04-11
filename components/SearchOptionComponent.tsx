import { FC } from "react";
import { FiChevronRight } from 'react-icons/fi';

interface SearchOptionComponentProps {
    id: number;
    selectLocation: (woeId: number) => void;
}

export const SearchOptionComponent: FC<SearchOptionComponentProps> = ({ id, selectLocation }) => {
    return (
        <div className="w-full p-4 mt-4"  onClick={()=> selectLocation(id)}>
            <div className="flex flex-row justify-between">
                Preston 
                <FiChevronRight className="self-center text-lg" />
            </div>
        </div>
    );
}