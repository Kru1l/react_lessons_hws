import './App.css';
import Simpson, {simpsons} from "./simpsons_component/Simpson";

function App() {
    return (
        <div className="App">

            {simpsons.map(member =>
                <Simpson key={member.id} member={member}/>)}

        </div>
    );
}

export default App;
