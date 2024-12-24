import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [findProduct, setFindProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedProducts = localStorage.getItem("products");
        if (savedProducts) {
            const getData = JSON.parse(savedProducts);
            setProducts(getData);
            const product = getData.find(item => item.id == id);
            if (product) {
                setFindProduct(product);
            }
        }
    }, [id]);

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        setCart(JSON.parse(cartData) || []);
    }, []);

    const addToCart = () => {
        if (!findProduct) return;
        const { id, title, image, description, price, rate, count } = findProduct;
        const updatedCart = [...cart];
        const existingProduct = updatedCart.find(product => product.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            updatedCart.push({ id, title, image, description, price, rate, count, quantity: 1 });
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        navigate("/order");
    };

    if (!findProduct) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="hidden relative sm:flex items-center justify-center px-2">
                <div className="absolute mx-2 mt-2 flex justify-between sm:hidden" onClick={() => navigate(-1)}>
                    <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]">
                        <svg className="mt-[14px] ml-[13px] w-[18px] h-[18px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                    </div>
                </div>
                <div className="w-[40%] h-full">
                    <img src={findProduct?.image} className="w-full object-cover" alt="" />
                </div>


                <div className="w-full bg-white h-full">
                    <div className="sm:hidden mt-[18px] mx-auto w-12 h-1 bg-[#FFCBCB] rounded-full"></div>
                    <div className="mt-[37px] ml-[31px] mr-[29px]">
                        <div className="float-left w-[76px] h-[34px] bg-pink-100 rounded-[7px]">
                            <p className="text-[#D61355] text-[12px] font-[500] text-center mt-2">Popular</p>
                        </div>

                        <div className="float-right mt-1">
                            <div className="float-left mx-3 w-8 h-8 bg-pink-100 rounded-full">
                                <svg className="mx-auto mt-[5px] " width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.31776C0 3.71789 3.84388 0 8.49345 0C13.1561 0 17 3.71789 17 8.31776C17 10.6357 16.157 12.7876 14.7695 14.6116C13.2388 16.6235 11.3522 18.3765 9.22854 19.7524C8.74251 20.0704 8.30387 20.0944 7.77045 19.7524C5.63474 18.3765 3.74809 16.6235 2.2305 14.6116C0.841983 12.7876 0 10.6357 0 8.31776ZM5.69423 8.57675C5.69423 10.1177 6.95166 11.3297 8.49345 11.3297C10.0362 11.3297 11.3058 10.1177 11.3058 8.57675C11.3058 7.0478 10.0362 5.77683 8.49345 5.77683C6.95166 5.77683 5.69423 7.0478 5.69423 8.57675Z" fill="#D61355" />
                                </svg>
                            </div>
                            <div className="float-right w-8 h-8 bg-gray-100 rounded-full">
                                <svg className="mx-auto my-[8px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_636)">
                                        <path d="M13.8933 3.07333C13.5528 2.73267 13.1485 2.46243 12.7036 2.27805C12.2586 2.09368 11.7817 1.99878 11.3 1.99878C10.8183 1.99878 10.3414 2.09368 9.89643 2.27805C9.45145 2.46243 9.04717 2.73267 8.70666 3.07333L8 3.78L7.29333 3.07333C6.60554 2.38553 5.67269 1.99914 4.7 1.99914C3.72731 1.99914 2.79446 2.38553 2.10666 3.07333C1.41887 3.76112 1.03247 4.69397 1.03247 5.66666C1.03247 6.63935 1.41887 7.5722 2.10666 8.26L2.81333 8.96666L8 14.1533L13.1867 8.96666L13.8933 8.26C14.234 7.91949 14.5042 7.51521 14.6886 7.07023C14.873 6.62526 14.9679 6.14832 14.9679 5.66666C14.9679 5.185 14.873 4.70807 14.6886 4.26309C14.5042 3.81812 14.234 3.41383 13.8933 3.07333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_636">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[91px] text-[#09051C] text-[27px] ml-[34px] font-[500]">
                        <p>{findProduct?.title}</p>
                    </div>

                    <div className="ml-[34px] mt-[16px]">
                        <div className="float-left">
                            <svg className="float-left" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.5L11.472 6.76604L17 7.61567L13 11.7124L13.944 17.5L9 14.766L4.056 17.5L5 11.7124L1 7.61567L6.528 6.76604L9 1.5Z" stroke="url(#paint0_linear_1_644)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 1.5L6.528 6.76604L1 7.61567L5 11.7124L4.056 17.5L9 14.766V1.5Z" fill="#FF9F06" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_644" x1="1" y1="0.517544" x2="19.4705" y2="3.37927" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9F06" />
                                        <stop offset="1" stop-color="#FF9F06" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="float-left text-[14px] font-[700] text-[#3B3B3B]/30 ml-[10px]">{findProduct?.rating?.rate} Rating</p>
                        </div>
                        <div className="float-left ml-[15px]">
                            <svg className="float-left ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2411 15.8249L17.241 15.8242L16.4525 5.69575C16.4525 5.6957 16.4525 5.69564 16.4525 5.69559C16.3938 4.91674 15.7475 4.30075 14.9707 4.30075H13.6591C13.5673 2.33087 11.9657 0.75 10.0002 0.75C8.03467 0.75 6.43304 2.33087 6.34125 4.30075H5.02963C4.25308 4.30075 3.60661 4.91642 3.54796 5.69408C3.54795 5.69419 3.54795 5.6943 3.54794 5.69441L2.75922 15.8256L2.75917 15.8262C2.69303 16.7052 2.99182 17.5806 3.58079 18.2288C4.16993 18.8773 5.00564 19.25 5.87506 19.25H14.1252C14.9946 19.25 15.8304 18.8773 16.4195 18.2288L16.2345 18.0607L16.4195 18.2288C17.0085 17.5806 17.3073 16.7052 17.2411 15.8249ZM5.07443 5.85508H6.3371V6.90358C6.3371 7.32822 6.67605 7.68075 7.10422 7.68075C7.53238 7.68075 7.87134 7.32822 7.87134 6.90358V5.85508H12.129V6.90358C12.129 7.32822 12.4679 7.68075 12.8961 7.68075C13.3243 7.68075 13.6632 7.32822 13.6632 6.90358V5.85508H14.9259L15.7114 15.9443C15.7114 15.9444 15.7114 15.9445 15.7114 15.9446C15.7459 16.4037 15.5964 16.8397 15.2907 17.1762C14.9851 17.5125 14.5724 17.6957 14.1252 17.6957H5.8751C5.42788 17.6957 5.01523 17.5125 4.70965 17.1762C4.40394 16.8397 4.25453 16.4037 4.28891 15.9461C4.28891 15.946 4.28892 15.9459 4.28893 15.9458L5.07443 5.85508ZM7.87844 4.30075C7.96779 3.18106 8.88953 2.30434 10.0002 2.30434C11.1108 2.30434 12.0325 3.18109 12.1219 4.30075H7.87844Z" fill="#D61355" stroke="#D61355" stroke-width="0.5" />
                                <path d="M11.6339 9.75617C11.9602 9.4298 12.4894 9.42977 12.8157 9.75617L11.6339 9.75617ZM11.6339 9.75617V9.75617L11.6339 9.75618L9.1952 12.1949L8.36629 11.3659C8.36628 11.3659 8.36628 11.3659 8.36627 11.3659C8.03992 11.0395 7.51073 11.0396 7.18436 11.3659C6.85798 11.6923 6.85798 12.2215 7.18436 12.5478L8.60424 13.9677C8.76735 14.1308 8.98167 14.2126 9.19516 14.2126C9.40856 14.2126 9.62295 14.1309 9.78608 13.9677C9.7861 13.9677 9.78612 13.9677 9.78614 13.9677L12.8157 10.9381C13.1421 10.6117 13.1421 10.0826 12.8158 9.7562L11.6339 9.75617Z" fill="#D61355" stroke="white" stroke-width="0.5" />
                            </svg>
                            <p className="float-left text-[14px] font-[700] text-[#3B3B3B]/30 ml-2">{findProduct?.rating?.count}+ Order</p>
                        </div>
                    </div>

                    <div className="mt-[60px] ml-[37px] mr-[15px] text-[12px] font-[500]">
                        <p>{findProduct?.description}</p>
                    </div>

                    <div className="mx-[25px] mt-6 h-[57px] bg-[#D61355] text-center rounded-lg shadow-[#144E5A33]/20 mb-5" onClick={() => addToCart()}>
                        <button className="text-[14px] text-[#FEFEFF] font-[700] mt-[22px]" type="submit" >Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="relative sm:hidden">
                <div className="absolute mx-2 mt-2 flex justify-between" onClick={() => navigate(-1)}>
                    <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]">
                        <svg className="mt-[14px] ml-[13px] w-[18px] h-[18px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                    </div>
                </div>
                <div className="w-full">
                    <img src={findProduct?.image} className="w-full object-cover" alt="" />
                </div>


                <div className="w-full absolute top-[420px] bg-white h-full">
                    <div className="mt-[18px] mx-auto w-12 h-1 bg-[#FFCBCB] rounded-full"></div>
                    <div className="mt-[37px] ml-[31px] mr-[29px]">
                        <div className="float-left w-[76px] h-[34px] bg-pink-100 rounded-[7px]">
                            <p className="text-[#D61355] text-[12px] font-[500] text-center mt-2">Popular</p>
                        </div>

                        <div className="float-right mt-1">
                            <div className="float-left mx-3 w-8 h-8 bg-pink-100 rounded-full">
                                <svg className="mx-auto mt-[5px] " width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.31776C0 3.71789 3.84388 0 8.49345 0C13.1561 0 17 3.71789 17 8.31776C17 10.6357 16.157 12.7876 14.7695 14.6116C13.2388 16.6235 11.3522 18.3765 9.22854 19.7524C8.74251 20.0704 8.30387 20.0944 7.77045 19.7524C5.63474 18.3765 3.74809 16.6235 2.2305 14.6116C0.841983 12.7876 0 10.6357 0 8.31776ZM5.69423 8.57675C5.69423 10.1177 6.95166 11.3297 8.49345 11.3297C10.0362 11.3297 11.3058 10.1177 11.3058 8.57675C11.3058 7.0478 10.0362 5.77683 8.49345 5.77683C6.95166 5.77683 5.69423 7.0478 5.69423 8.57675Z" fill="#D61355" />
                                </svg>
                            </div>
                            <div className="float-right w-8 h-8 bg-gray-100 rounded-full">
                                <svg className="mx-auto my-[8px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_636)">
                                        <path d="M13.8933 3.07333C13.5528 2.73267 13.1485 2.46243 12.7036 2.27805C12.2586 2.09368 11.7817 1.99878 11.3 1.99878C10.8183 1.99878 10.3414 2.09368 9.89643 2.27805C9.45145 2.46243 9.04717 2.73267 8.70666 3.07333L8 3.78L7.29333 3.07333C6.60554 2.38553 5.67269 1.99914 4.7 1.99914C3.72731 1.99914 2.79446 2.38553 2.10666 3.07333C1.41887 3.76112 1.03247 4.69397 1.03247 5.66666C1.03247 6.63935 1.41887 7.5722 2.10666 8.26L2.81333 8.96666L8 14.1533L13.1867 8.96666L13.8933 8.26C14.234 7.91949 14.5042 7.51521 14.6886 7.07023C14.873 6.62526 14.9679 6.14832 14.9679 5.66666C14.9679 5.185 14.873 4.70807 14.6886 4.26309C14.5042 3.81812 14.234 3.41383 13.8933 3.07333Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_636">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[91px] text-[#09051C] text-[27px] ml-[34px] font-[500]">
                        <p>{findProduct?.title}</p>
                    </div>

                    <div className="ml-[34px] mt-[16px]">
                        <div className="float-left">
                            <svg className="float-left" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.5L11.472 6.76604L17 7.61567L13 11.7124L13.944 17.5L9 14.766L4.056 17.5L5 11.7124L1 7.61567L6.528 6.76604L9 1.5Z" stroke="url(#paint0_linear_1_644)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 1.5L6.528 6.76604L1 7.61567L5 11.7124L4.056 17.5L9 14.766V1.5Z" fill="#FF9F06" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_644" x1="1" y1="0.517544" x2="19.4705" y2="3.37927" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9F06" />
                                        <stop offset="1" stop-color="#FF9F06" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="float-left text-[14px] font-[700] text-[#3B3B3B]/30 ml-[10px]">{findProduct?.rating?.rate} Rating</p>
                        </div>
                        <div className="float-left ml-[15px]">
                            <svg className="float-left ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2411 15.8249L17.241 15.8242L16.4525 5.69575C16.4525 5.6957 16.4525 5.69564 16.4525 5.69559C16.3938 4.91674 15.7475 4.30075 14.9707 4.30075H13.6591C13.5673 2.33087 11.9657 0.75 10.0002 0.75C8.03467 0.75 6.43304 2.33087 6.34125 4.30075H5.02963C4.25308 4.30075 3.60661 4.91642 3.54796 5.69408C3.54795 5.69419 3.54795 5.6943 3.54794 5.69441L2.75922 15.8256L2.75917 15.8262C2.69303 16.7052 2.99182 17.5806 3.58079 18.2288C4.16993 18.8773 5.00564 19.25 5.87506 19.25H14.1252C14.9946 19.25 15.8304 18.8773 16.4195 18.2288L16.2345 18.0607L16.4195 18.2288C17.0085 17.5806 17.3073 16.7052 17.2411 15.8249ZM5.07443 5.85508H6.3371V6.90358C6.3371 7.32822 6.67605 7.68075 7.10422 7.68075C7.53238 7.68075 7.87134 7.32822 7.87134 6.90358V5.85508H12.129V6.90358C12.129 7.32822 12.4679 7.68075 12.8961 7.68075C13.3243 7.68075 13.6632 7.32822 13.6632 6.90358V5.85508H14.9259L15.7114 15.9443C15.7114 15.9444 15.7114 15.9445 15.7114 15.9446C15.7459 16.4037 15.5964 16.8397 15.2907 17.1762C14.9851 17.5125 14.5724 17.6957 14.1252 17.6957H5.8751C5.42788 17.6957 5.01523 17.5125 4.70965 17.1762C4.40394 16.8397 4.25453 16.4037 4.28891 15.9461C4.28891 15.946 4.28892 15.9459 4.28893 15.9458L5.07443 5.85508ZM7.87844 4.30075C7.96779 3.18106 8.88953 2.30434 10.0002 2.30434C11.1108 2.30434 12.0325 3.18109 12.1219 4.30075H7.87844Z" fill="#D61355" stroke="#D61355" stroke-width="0.5" />
                                <path d="M11.6339 9.75617C11.9602 9.4298 12.4894 9.42977 12.8157 9.75617L11.6339 9.75617ZM11.6339 9.75617V9.75617L11.6339 9.75618L9.1952 12.1949L8.36629 11.3659C8.36628 11.3659 8.36628 11.3659 8.36627 11.3659C8.03992 11.0395 7.51073 11.0396 7.18436 11.3659C6.85798 11.6923 6.85798 12.2215 7.18436 12.5478L8.60424 13.9677C8.76735 14.1308 8.98167 14.2126 9.19516 14.2126C9.40856 14.2126 9.62295 14.1309 9.78608 13.9677C9.7861 13.9677 9.78612 13.9677 9.78614 13.9677L12.8157 10.9381C13.1421 10.6117 13.1421 10.0826 12.8158 9.7562L11.6339 9.75617Z" fill="#D61355" stroke="white" stroke-width="0.5" />
                            </svg>
                            <p className="float-left text-[14px] font-[700] text-[#3B3B3B]/30 ml-2">{findProduct?.rating?.count}+ Order</p>
                        </div>
                    </div>

                    <div className="mt-[60px] ml-[37px] mr-[15px] text-[12px] font-[500]">
                        <p>{findProduct?.description}</p>
                    </div>
                    <div className="w-full fixed bottom-0 px-2 ">
                        <div className="w-full h-[57px] bg-[#D61355] text-center rounded-lg shadow-[#144E5A33]/20 mb-5" onClick={() => addToCart()}>
                            <button className="text-[14px] text-[#FEFEFF] font-[700] mt-[22px]" type="submit" >Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;