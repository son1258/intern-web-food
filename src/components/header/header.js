import React from "react";
import Footer from "../footer";
import MenuLogo from "../../assets/icons/menu.svg";
import LocationLogo from "../../assets/icons/location.svg";
import Avatar from "../../assets/images/avatar.jpg";

function Header() {
    return (
        <div>
            <div className="hidden sm:flex py-5 items-center justify-between px-10">
                <div>
                    <Footer />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <img src={MenuLogo} className="w-14 h-14 sm:hidden" alt="menu logo" />
                    <div className="flex items-center justify-between">
                        <img src={LocationLogo} className="" alt="location logo" />
                        <p className="text-base font-bold">279 Nguyễn Tri Phương, P.14, Q.10</p>
                    </div>
                    <div>
                        <img src={Avatar} className="w-14 h-14 rounded-full" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="sm:hidden p-4">
                <div className="flex items-center justify-between gap-4 w-full">
                    <img src={MenuLogo} className="w-10 h-10" alt="menu logo" />
                    <div className="flex items-center justify-between">
                        <img src={LocationLogo} className="" alt="location logo" />
                        <p className="text-[10px] font-bold">279 Nguyễn Tri Phương, P.14, Q.10</p>
                    </div>
                    <div>
                        <img src={Avatar} className="w-10 h-10 rounded-full" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;