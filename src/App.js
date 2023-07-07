import './App.css';
import Character from "./component_character/Character";
import {characters} from "./component_character/Character";

function App() {
    return (
        <div className="App">

            {characters.map(person =>
                <Character key={person.id} person={person}/>)}

        </div>
    );
}

export default App;
