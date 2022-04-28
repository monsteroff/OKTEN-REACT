import React, {useEffect, useState} from 'react';

import {getSpaceships} from '../services/spaceship.service'
import Spaceship from "./Spaceship";

const Spaceships = () => {
    const [spaceships, setSpaceships] = useState([]);
    useEffect(()=>{
        getSpaceships().then(value => setSpaceships(value.data))
    },[])

    return (
        <div className="spaceships">
            {
                !spaceships.length? false : spaceships.filter(spaceship => Number(spaceship.launch_year) < 2020).map(spaceship =>
                    <Spaceship key={spaceship.flight_number} mission_name={spaceship.mission_name} launch_year={spaceship.launch_year} mission_patch_small={spaceship.links.mission_patch_small}/>
                )
            }
        </div>
    );
};

export default Spaceships;