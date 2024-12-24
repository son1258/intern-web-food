import React, { useEffect, useState } from "react";
import Search from "../components/search";
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    const [products, setProducts] = useState();

    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            const getDataProduct = JSON.parse(savedProducts);
            setProducts(getDataProduct);
        }
    }, []);

    return (
        <div className="sm:px-10 px-4">
            <div className="px-1 py-2 flex justify-between sm:hidden" onClick={() => navigate(-1)}>
                <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]">
                    <svg className="mt-[14px] ml-[13px] w-[18px] h-[18px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                </div>
            </div>
            <Search />
            {products?.length > 0 ? (
                <div className="flex flex-col gap-2 mt-10">
                    {products.map((product) => (
                        <div className="border-[0.5px] border-black-30 rounded-lg py-5 shadow" onClick={() => navigate(`/detail/${product.id}`)}>
                            <div className="px-4 flex items-center justify-between font-bold gap-4">
                                <img src={product.image} alt="product" className="w-20 h-30" />
                                <div className="w-[80%]">
                                    <p>{product.title}</p>
                                    <p className="font-medium">{product.description}</p>
                                </div>
                                <p className="text-blue-500">$ {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Menu;