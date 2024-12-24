import React from "react";
import SearchIcon from "../assets/icons/search.svg";

function Search() {

    return (
        <div className="flex items-center">
            <div className="relative w-full">
                <img className="absolute py-4 px-8" src={SearchIcon} alt="search icon" />
                <input placeholder="Search" className="px-14 py-4 w-full border-none border-black/20 rounded-[8px] text-bold bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] outline-none"/>
            </div>
        </div>
    )
}

export default Search;