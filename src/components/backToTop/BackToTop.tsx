import { useEffect, useState } from 'react';
import "./backToTop.css";
import { BiArrowToTop } from 'react-icons/bi';

const BackToTop = () => {
    const [showOrHide, setShowOrHide] = useState<boolean>(false);
    const [strokeDasharray, setStrokeDasharray] = useState<string>("0");

    useEffect(() => {
        const handleScroll = () => {
            const pos = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            if (pos > 100) {
                setShowOrHide(true);
                const newStrokeDasharray = Math.round((pos * 220) / calcHeight)
                setStrokeDasharray(`${newStrokeDasharray} 500`);
            } else {
                setShowOrHide(false);
                setStrokeDasharray("0 500");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showOrHide,strokeDasharray]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showOrHide && (
                <div
                    className='back-to-top relative flex items-center justify-center cursor-pointer' 
                    onClick={scrollToTop}
                >
                    <svg width="100%" height="100%" className='absolute left-0 top-0'>
                        <circle 
                            cx="50%" 
                            cy="50%" 
                            r="35" // Adjusted radius for better coverage
                            style={{ 
                                stroke: "#448c74", // Change to your desired green color
                                fill: "none", 
                                strokeWidth: "20px", 
                                strokeDasharray: strokeDasharray 
                            }} 
                        />
                    </svg>
                    <BiArrowToTop size={30} color="white" />
                </div>
            )}
        </>
    );
};

export default BackToTop;
