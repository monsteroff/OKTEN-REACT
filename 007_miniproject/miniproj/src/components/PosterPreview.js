import React from "react";

const PosterPreview = ({poster_preview_link,alternative}) => {
    return (
        <div className="posterPreviewDiv">
            <img src={poster_preview_link} alt={alternative}/>
        </div>
    );
};

export {PosterPreview};