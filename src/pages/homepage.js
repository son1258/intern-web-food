import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../components/search";
import SlidesBanner from "../components/slideBanners";
import FoodTitle from "../components/foodTitle";
import fetchProducts from "../services/getData";
import StarIcon from "../assets/icons/star.svg";
import AddProductIcon from "../assets/icons/add-circle.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import Footer from "../components/footer";

function Homepage() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState();

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const foodItems = [
        { icon: "🍔", name: "Burger" },
        { icon: "🍕", name: "Pizza" },
        { icon: "🌭", name: "Sandwich" }
    ];

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            try {
                const result = await fetchProducts();
                setProducts(result);
                localStorage.setItem("products", JSON.stringify(result));
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full">
            <div className="sm:px-10 px-4">
                <Search />
                <SlidesBanner />
                <div className="flex flex-row gap-4 mt-5">
                    {foodItems.map((item, index) => (
                        <FoodTitle
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            isActive={activeIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                <div className="w-full mt-5">
                    {isLoading ? (
                        <p>Loading products...</p>
                    ) : products?.length > 0 ? (
                        <div>
                            <div className="flex flex-col">
                                <div className="flex gap-4 overflow-x-auto scrollbar w-full">
                                    {products.map((product) => (
                                        <div key={product.id} className="min-w-[200px] bg-white rounded shadow p-4" onClick={() => navigate(`/detail/${product.id}`)}>
                                            <div className="flex items-center mb-2">
                                                <img src={StarIcon} alt="star icon" className="w-4 h-4 mr-1" />
                                                <p className="font-bold">{product.rating.rate}</p>
                                            </div>
                                            <div className="w-full h-40 flex justify-center items-center mb-2">
                                                <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                                            </div>
                                            <div className="text-sm mb-2">
                                                <p className="font-bold truncate">{product.title}</p>
                                                <p className="text-gray-500 line-clamp-2">{product.description}</p>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <p className="text-lg font-semibold text-blue-500">${product.price}</p>
                                                <img src={AddProductIcon} alt="add icon" className="w-6 h-6 cursor-pointer"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pb-[100px]">
                                <div>
                                    <div className="flex items-center justify-between py-5 font-bold">
                                        <p className="text-xl">Popular Meal Menu</p>
                                        <div className="inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate("/menu")}>
                                            <p className="text-black/30">See All</p>
                                            <img src={ArrowIcon} alt="arrow icon" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="border-[0.5px] border-black-30 rounded-lg py-5 shadow">
                                        <div className="px-4 flex items-center justify-between font-bold gap-4">
                                            <img src={products[0].image} alt="product" className="w-20 h-30" />
                                            <div>
                                                <p>{products[0].title}</p>
                                                <p className="font-medium">{products[0].description}</p>
                                            </div>
                                            <p className="text-blue-500">$ {products[0].price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
            <div className="fixed bottom-0 sm:hidden w-full">
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;
