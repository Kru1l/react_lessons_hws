import './App.css';
import Launches from "./components/Launches/Launches";

function App() {
    return (
        <div className="App">
            <Launches/>
        </div>
    );
}

export default App;

// ===============
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)