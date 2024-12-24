import React, { useState } from "react";
import StarIcon from "../assets/icons/start-default.svg";
import StarRatingIcon from "../assets/icons/star-rating.svg";
import { useNavigate } from "react-router-dom";


function FinishOrder() {
    const navigate = useNavigate();
    const [rating, setRating] = useState([false, false, false, false, false]);

    const handleRating = (index) => {
        setRating((prevRatings) =>
            prevRatings.map((rating, i) => (i === index ? !rating : rating))
        );
    };

    return (
        <div className="sm:px-10 px-4">
            <div className="hidden sm:block">
                <div className="flex justify-center">
                    <div className="relative">
                        <svg width="172" height="162" viewBox="0 0 172 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="165.5" cy="32.5" r="6.5" fill="url(#paint0_linear_1_1939)" />
                            <ellipse cx="10.5" cy="10" rx="10.5" ry="10" fill="url(#paint1_linear_1_1939)" />
                            <ellipse cx="5" cy="136.5" rx="5" ry="5.5" fill="url(#paint2_linear_1_1939)" />
                            <ellipse cx="153.5" cy="160" rx="2.5" ry="2" fill="url(#paint3_linear_1_1939)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_1939" x1="159" y1="25.2018" x2="174.007" y2="27.5269" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_1939" x1="-2.97791e-08" y1="-1.22807" x2="24.1844" y2="2.7063" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1_1939" x1="-1.41805e-08" y1="130.325" x2="11.5912" y2="131.957" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1_1939" x1="151" y1="157.754" x2="156.697" y2="158.858" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute top-[72px] left-[43px] w-[82px] h-[82px] rounded-full bg-[#D61355]">
                            <svg className="mt-[30px] ml-[25px]" width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.47217 11.5694L12.2037 20.1111L29.6666 3.02777" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <p className="text-[25px] font-[700]">Thank You!</p>
                        <p className="text-[25px] font-[700]">Order Completed</p>
                        <p className="mt-5 text-[14px] font-[500] text-[#3B3B3B]/30">Please rate your last Driver</p>
                        <div className="mt-[33px] flex flex-row space-x-6">
                            {rating.map((isRating, index) => (
                                <img
                                    key={index}
                                    src={isRating ? StarRatingIcon : StarIcon}
                                    alt="star"
                                    onClick={() => handleRating(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-1">
                        <div className="mx-5 h-[55px] w-full border-[1px] border-[#F6F6F6] inline-flex items-center rounded-[7px]">
                            <svg className="ml-[19px] my-[16px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4.66663H4C3.46957 4.66663 2.96086 4.87734 2.58579 5.25241C2.21071 5.62749 2 6.13619 2 6.66663V20.6666C2 21.1971 2.21071 21.7058 2.58579 22.0808C2.96086 22.4559 3.46957 22.6666 4 22.6666H18C18.5304 22.6666 19.0391 22.4559 19.4142 22.0808C19.7893 21.7058 20 21.1971 20 20.6666V13.6666" stroke="url(#paint0_linear_1_1921)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 3.16661C18.8978 2.76878 19.4374 2.54529 20 2.54529C20.5626 2.54529 21.1022 2.76878 21.5 3.16661C21.8978 3.56443 22.1213 4.104 22.1213 4.66661C22.1213 5.22922 21.8978 5.76878 21.5 6.16661L12 15.6666L8 16.6666L9 12.6666L18.5 3.16661Z" stroke="url(#paint1_linear_1_1921)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_1921" x1="2" y1="3.56136" x2="22.7793" y2="6.78081" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D61355" />
                                        <stop offset="1" stop-color="#FF0000" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_1921" x1="8" y1="1.67819" x2="24.3017" y2="4.2039" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D61355" />
                                        <stop offset="1" stop-color="#FF0000" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <input type="text" className="ml-[10px] w-full text-[14px] font-[400] font-[Roboto] text-[#3B3B3B]/30" placeholder="Leave feedback" />
                        </div>
                    </div>

                    <div className="mt-1 mx-5 text-[14px] font-[Roboto] font-[900] mb-8 h-[57px]">
                        <button type="submit" className="w-[233px] h-[57px] bg-gradient-to-r from-[#D61355] to-[#FF0000] text-white rounded-[7px]" onClick={() => navigate('/')}>Submit</button>
                        <button type="submit" className="ml-5 text-[#FF0000] w-[82px] h-[57px] rounded-[7px] shadow-[#5A6CEA12]/7" onClick={() => navigate('/')}>Skip</button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden sm:block">
                <div className="flex justify-center">
                    <div className="relative">
                        <svg width="172" height="162" viewBox="0 0 172 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="165.5" cy="32.5" r="6.5" fill="url(#paint0_linear_1_1939)" />
                            <ellipse cx="10.5" cy="10" rx="10.5" ry="10" fill="url(#paint1_linear_1_1939)" />
                            <ellipse cx="5" cy="136.5" rx="5" ry="5.5" fill="url(#paint2_linear_1_1939)" />
                            <ellipse cx="153.5" cy="160" rx="2.5" ry="2" fill="url(#paint3_linear_1_1939)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_1939" x1="159" y1="25.2018" x2="174.007" y2="27.5269" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_1939" x1="-2.97791e-08" y1="-1.22807" x2="24.1844" y2="2.7063" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1_1939" x1="-1.41805e-08" y1="130.325" x2="11.5912" y2="131.957" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1_1939" x1="151" y1="157.754" x2="156.697" y2="158.858" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D61355" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute top-[72px] left-[43px] w-[82px] h-[82px] rounded-full bg-[#D61355]">
                            <svg className="mt-[30px] ml-[25px]" width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.47217 11.5694L12.2037 20.1111L29.6666 3.02777" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <p className="text-[25px] font-[700]">Thank You!</p>
                        <p className="text-[25px] font-[700]">Order Completed</p>
                        <p className="mt-5 text-[14px] font-[500] text-[#3B3B3B]/30">Please rate your last Driver</p>
                        <div className="mt-[33px] flex flex-row space-x-6">
                            {rating.map((isRating, index) => (
                                <img
                                    key={index}
                                    src={isRating ? StarRatingIcon : StarIcon}
                                    alt="star"
                                    onClick={() => handleRating(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-1">
                        <div className="mx-5 h-[55px] w-full border-[1px] border-[#F6F6F6] inline-flex items-center rounded-[7px]">
                            <svg className="ml-[19px] my-[16px]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4.66663H4C3.46957 4.66663 2.96086 4.87734 2.58579 5.25241C2.21071 5.62749 2 6.13619 2 6.66663V20.6666C2 21.1971 2.21071 21.7058 2.58579 22.0808C2.96086 22.4559 3.46957 22.6666 4 22.6666H18C18.5304 22.6666 19.0391 22.4559 19.4142 22.0808C19.7893 21.7058 20 21.1971 20 20.6666V13.6666" stroke="url(#paint0_linear_1_1921)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 3.16661C18.8978 2.76878 19.4374 2.54529 20 2.54529C20.5626 2.54529 21.1022 2.76878 21.5 3.16661C21.8978 3.56443 22.1213 4.104 22.1213 4.66661C22.1213 5.22922 21.8978 5.76878 21.5 6.16661L12 15.6666L8 16.6666L9 12.6666L18.5 3.16661Z" stroke="url(#paint1_linear_1_1921)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_1921" x1="2" y1="3.56136" x2="22.7793" y2="6.78081" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D61355" />
                                        <stop offset="1" stop-color="#FF0000" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_1921" x1="8" y1="1.67819" x2="24.3017" y2="4.2039" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D61355" />
                                        <stop offset="1" stop-color="#FF0000" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <input type="text" className="ml-[10px] w-full text-[14px] font-[400] font-[Roboto] text-[#3B3B3B]/30" placeholder="Leave feedback" />
                        </div>
                    </div>

                    <div className="mt-1 mx-5 text-[14px] font-[Roboto] font-[900] mb-8 h-[57px]">
                        <button type="submit" className="w-[233px] h-[57px] bg-gradient-to-r from-[#D61355] to-[#FF0000] text-white rounded-[7px]" onClick={() => navigate('/')}>Submit</button>
                        <button type="submit" className="ml-5 text-[#FF0000] w-[82px] h-[57px] rounded-[7px] shadow-[#5A6CEA12]/7" onClick={() => navigate('/')}>Skip</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishOrder;