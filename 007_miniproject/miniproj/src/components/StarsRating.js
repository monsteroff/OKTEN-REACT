import {useEffect, useState} from "react";

const StarsRating = ({vote}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        setRating(Math.floor(vote))
        setHover(Math.floor(vote))
    },[vote])

    return (
        <div className="divForStars">
            {[...Array(10)].map((star, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        className={index <= (hover || rating) ? "butt on" : "butt off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </span>
                );
            })}
        </div>
    );
};

export {StarsRating};