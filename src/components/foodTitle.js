import React from "react";

function FoodTitle({ icon, name, isActive, onClick }) {
    return (
        <div
            className={`flex items-center justify-center text-black font-bold gap-2 px-5 py-3 border-[0.5px] border-[#D61355] rounded-lg w-full ${isActive ? "bg-[#D61355] text-[#ffffff]" : "bg-white"}`}
            onClick={onClick}
        >
            <p>{icon}</p>
            <p>{name}</p>
        </div>
    );
}

export default FoodTitle;
