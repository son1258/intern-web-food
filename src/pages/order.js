import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
    const navigate = useNavigate();
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        let itemCart = localStorage.getItem('cart');
        itemCart = JSON.parse(itemCart);
        setOrderItems(itemCart);
    }, [])


    const descreaseQuantity = (index) => {
        const updateItems = [...orderItems];
        if(updateItems[index].quantity > 1){
            updateItems[index].quantity -= 1;
        }else{
            updateItems.splice(index, 1);
        }
        setOrderItems(updateItems);
        localStorage.setItem('cart', JSON.stringify(updateItems));
    }

    const increaseQuantity = (index) => {
        const updateItems = [...orderItems];
        updateItems[index].quantity += 1;
        setOrderItems(updateItems);
        localStorage.setItem('cart', JSON.stringify(updateItems));
    }

    const calculateSub = () => {
        let subtotal = 0; 
        orderItems.forEach(item => {
            subtotal += item.quantity * item.price;
        });
        return subtotal;
    }

    const calculateTotal =() => {
        const subtotal = calculateSub();
        const deleveryCharge = 10;
        const discount = 10/100*(calculateSub() + deleveryCharge);
        return subtotal + deleveryCharge - discount;
    }
    return (
        <div className="w-full sm:px-10 px-4 h-screen">
            <div className="sm:hidden px-1 mt-2 flex justify-between" onClick={() => navigate(-1)}>
                <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]">
                    <svg className="mt-[14px] ml-[13px] w-[18px] h-[18px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="#ff0000" d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                    </svg>
                </div>
            </div>
            <div className="mt-[19px]">
                <p className="text-[25px] font-bold">Order Details</p>
            </div>

            <div className="mx-[14px] mt-[20px]">
                {orderItems.length === 0 ? "" : (
                    <div>
                        {orderItems.map((item, index) => (
                            <div className="rounded-[7px] shadow-md h-[103px]">
                                <div className="float-left rounded-[7px] mt-[21px] ml-[11px] w-10 h-10">
                                    <img src={item.image ? item.image : ''} alt=""/> 
                                </div>
                                <div className="float-left mt-[18px] ml-5 w-1/2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <h2 className="font-[500] text-[15px] overflow-hidden">{item.title ? item.title : ''}</h2>
                                    <h2 className="font-[500] text-[14px] text-[#3B3B3B]/30">{item.description ? item.description : ''}</h2>
                                    <h2 className="text-[#D61355] font-[700] text-[19px]">$ {item.price ? item.price : 0}</h2>
                                </div>
                                <div className="float-right mt-[46px] mx-[10px]">
                                    <svg onClick={() => descreaseQuantity(index)} className="float-left" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="htstp://www.w3.org/2000/svg">
                                        <rect opacity="0.1" width="26" height="26" rx="8" fill="url(#paint0_linear_1_1099)" />
                                        <path d="M8.125 12.4583H18.125V13.8869H8.125V12.4583Z" fill="url(#paint1_linear_1_1099)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1_1099" x1="-3.68694e-08" y1="-1.59649" x2="30.0145" y2="3.05382" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#D61355" />
                                                <stop offset="1" stopColor="#FF0000" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1_1099" x1="8.125" y1="12.3706" x2="13.5569" y2="18.2618" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#D61355" />
                                                <stop offset="1" stopColor="#FF0000" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <p className="float-left mx-[16px]">{item.quantity}</p>
                                    <svg onClick={() => increaseQuantity(index)} className="float-left" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="26" rx="8" fill="url(#paint0_linear_1_1102)" />
                                        <path d="M12.4106 12.2857V7.99997H13.8391V12.2857H18.1249V13.7142H13.8391V18H12.4106V13.7142H8.12488V12.2857H12.4106Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1_1102" x1="-3.68694e-08" y1="-1.59649" x2="30.0145" y2="3.05382" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#D61355" />
                                                <stop offset="1" stopColor="#FF0000" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="fixed inset-x-0 bottom-0 w-full px-[14px]">
            <div className="bg-gradient-to-r from-[#D61355] to-[#FF0000] rounded-[7px] h-[206px]" >
                <div className="py-5 ml-[29px] mr-[24px] text-white font-[Poppins] text-[14px]">
                    <div className="w-full h-[21px] inline-block">
                        <p className="float-left">Sub-Total</p>
                        <p className="float-right">$ {calculateSub()}</p>
                    </div>
                    <div className="w-full h-[21px] inline-block">
                        <p className="float-left">Delivery Charge</p>
                        <p className="float-right">$ 10</p>
                    </div>
                    <div className="w-full h-[21px] inline-block">
                        <p className="float-left">Discount</p>
                        <p className="float-right">10%</p>
                    </div>
                    <div className="w-full h-[21px] inline-block text-[18px] font-[900]">
                        <p className="float-left">Total</p>
                        <p className="float-right">$ {calculateTotal()}</p>
                    </div>
                </div>
                <div className="mx-[12px] h-[45px] bg-white rounded-lg text-center">
                    <button type="button" className="text-[#D61355] font-[700] text-[14px] mt-[12px]" onClick={() => navigate('/order/finish')}>
                        Place my order
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Order;
