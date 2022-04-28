import React from 'react';

const Spaceship = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className="spaceship">
            <div className="forText">
                <h2>{mission_name}</h2>
                <h3>{launch_year}</h3>
            </div>
            <div className="forImage">
                <img src={mission_patch_small} alt="spaceship" />
            </div>
        </div>
    );
};

export default Spaceship;