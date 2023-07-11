import styles from './LaunchComponent.module.css'

const LaunchComponent = ({mission_name, launch_year, mission_patch_small}) => {

    return (
        <div className={styles.launch}>
            <h1>{mission_name}</h1>
            <p>Launch Year: {launch_year}</p>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
};

export default LaunchComponent;