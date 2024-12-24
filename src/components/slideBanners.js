import BurgerBanner from "../assets/images/burger-banner.png";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner3.jpg";
import { useState } from "react";

function SlidesBanner() {
    const [currentSlidesBannerIndex, setCurrentSlidesBannerIndex] = useState(0);
    const slidesBanner = [
        <div key={0} className="bg-gradient-to-r from-[#ff1205] to-[#ffb3b3] rounded-[10px] relative overflow-hidden sm:h-[500px] h-[150px]">
            <div className="px-5 sm:mt-[100px] mt-8">
                <h2 className="sm:text-[32px] text-16 text-white font-bold w-full">Special Offer for March</h2>
                <div className="sm:w-[400px] w-[114px]">
                    <p className="sm:text-[30px] text-[8px] text-white">We are here with the best desserts in town.</p>
                </div>
                <button type="submit" className="bg-white sm:text-[32px] text-[8px] text-red-500 font-bold sm:px-[18px] px-[11px] py-[6.5px] sm:py-2 sm:rounded-lg rounded-[5px]">Buy Now</button>
            </div>
            <div className="absolute top-[16px] w-ful h-full right-[-70px]">
                <img src={BurgerBanner} alt="Burger Banner" className="w-full h-full object-cover" />
            </div>
        </div>,
        <img key={1} src={Banner1} alt="Burger1 Banner" className="w-full sm:h-[500px] h-[150px] object-cover rounded-[10px]" />,
        <img key={2} src={Banner2} alt="Burger2 Banner" className="w-full sm:h-[500px] h-[150px] object-cover rounded-[10px]" />
    ]

    const handleSwipe = (event) => {
        const startX = event.touches[0].clientX;
        let endX;

        const onTouchMove = (e) => {
            endX = e.touches[0].clientX;
        };

        const onTouchEnd = () => {
            if (!endX) return;

            const deltaX = startX - endX;

            if (deltaX > 50) {
                setCurrentSlidesBannerIndex((prev) => (prev === 0 ? slidesBanner.length - 1 : prev - 1));
            } else if (deltaX < -50) {
                setCurrentSlidesBannerIndex((prev) => (prev === slidesBanner.length - 1 ? 0 : prev + 1));
            }

            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
        };

        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
    };

    return (
        <div>
            <div className="mt-[25px] flex flex-col overflow-hidden" onTouchStart={handleSwipe}>
                {slidesBanner[currentSlidesBannerIndex]}
            </div>
            <div className="mt-[15px] flex flex-row justify-center">
                {slidesBanner.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlidesBannerIndex(index)}
                        className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer ${currentSlidesBannerIndex === index ? "bg-[#FF0000]" : "bg-[#E2E2E2]"}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default SlidesBanner;