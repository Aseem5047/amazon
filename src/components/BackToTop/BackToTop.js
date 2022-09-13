import React, {useState, useEffect} from 'react'
import './BackToTop.css'

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = ()=>{
        if(window.pageYOffset > 3000){
            setIsVisible(true);
        }

        else{
            setIsVisible(false);
        }
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return ()=>{
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [])

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="back-top-container">
                    <div style={{padding:"8px"}}>
                    Back To Top
                    </div>
                </div>
            )}
        </div>
    )
}

export default BackToTop
