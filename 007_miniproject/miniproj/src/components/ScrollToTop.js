import React, {useState} from "react";

const ScrollToTop = () => {
    const [pageYy, setPageYy] = useState(false)
    window.onwheel = (e) => {
        if(e.pageY - e.y >= 250) setPageYy(true)
        else setPageYy(false)
    }

    const scrToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        setPageYy(false)
    }
    return (
        <div onClick={scrToTop} className={`scrollToTopDiv ${pageYy? "upActive" : ""}`}>
            &uarr;
        </div>
    );
};

export {ScrollToTop};