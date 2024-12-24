import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/icons/home.svg";
import CartIcon from "../assets/icons/cart.svg";
import AccountIcon from "../assets/icons/account.svg";
import ChatIcon from "../assets/icons/chat.svg";
import { useState } from "react";

function Footer() {
    const navigate = useNavigate();
    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    };

    const menuItems = [
        { id: 0, icon: HomeIcon, label: "Home", route: "/" },
        { id: 1, icon: AccountIcon, label: "Account", route: "/account" },
        { id: 2, icon: CartIcon, label: "Cart", route: "/order" },
        { id: 3, icon: ChatIcon, label: "Chat", route: "/chat" },
    ];

    return (
        <div className="w-full">
            <div className="hidden sm:flex items-center justify-between gap-2 rounded-lg shadow-lg">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`px-6 py-[12px] inline-flex items-center gap-1 px-2 py-1 rounded cursor-pointer ${active === item.id ? "bg-red-400 text-white font-bold" : "bg-white text-black"
                            }`}
                        onClick={() => {
                            handleClick(item.id);
                            navigate(item.route);
                        }}
                    >
                        <img src={item.icon} alt={`${item.label} icon`} />
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="sm:hidden w-full py-2 bg-white">
                <div className="flex flex-row w-full justify-between gap-2 px-2">
                {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`py-3 flex items-center rounded px-2 cursor-pointer ${active === item.id ? "bg-red-400 text-white font-bold" : "bg-white text-black"
                                }`}
                            onClick={() => {
                                handleClick(item.id);
                                navigate(item.route);
                            }}
                        >
                            <img src={item.icon} alt={`${item.label} icon`} />
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
