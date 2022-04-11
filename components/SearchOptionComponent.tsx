import { FC } from "react";
import { FiChevronRight } from 'react-icons/fi';

interface SearchOptionComponentProps {
}

export const SearchOptionComponent: FC<SearchOptionComponentProps> = () => {
    return (
        <div className="w-full p-4 mt-4">
            <div className="flex flex-row justify-between">
                Preston 
                <FiChevronRight className="self-center text-lg" />
            </div>
        </div>
    );
}