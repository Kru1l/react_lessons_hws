import LaunchComponent from "./LaunchComponent/LaunchComponent";
import {useEffect, useState} from "react";


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(launches => setLaunches(launches))
            .catch()
    }, []);

    return (
        <>
            {launches.filter(launch => launch.launch_year !== '2020')
                .map((launch, id) => {

                    return (
                        <LaunchComponent key={id}
                                         mission_name={launch.mission_name}
                                         launch_year={launch.launch_year}
                                         mission_patch_small={launch.links.mission_patch_small}
                        />
                    )
                })}
        </>
    );
};

export default Launches;