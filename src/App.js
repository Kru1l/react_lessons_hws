import './App.css';
import Character from "./component_character/Character";

function App() {
    return (
        <div className="App">

            <Character id={6} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'}
                       image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>

            <Character id={500} name={'Fascist Mr. President'} status={'Alive'} species={'Human'} gender={'Male'}
                       image={'https://rickandmortyapi.com/api/character/avatar/500.jpeg'}/>

            <Character id={323} name={'Slaveowner'} status={'Dead'} species={'Human'} gender={'Male'}
                       image={'https://rickandmortyapi.com/api/character/avatar/323.jpeg'}/>

            <Character id={777} name={'Gotron Pilot'} status={'Dead'} species={'Human'} gender={'Male'}
                       image={'https://rickandmortyapi.com/api/character/avatar/777.jpeg'}/>

            <Character id={568} name={'Slut Dragon'} status={'Alive'} species={'Mythological Creature'} gender={'Male'}
                       image={'https://rickandmortyapi.com/api/character/avatar/568.jpeg'}/>

        </div>
    );
}

export default App;
