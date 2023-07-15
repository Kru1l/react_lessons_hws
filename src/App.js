import './App.css';
import UsersComponent from "./components/UsersContainer/UsersComponent";
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, []);

    return (
        <div className="App">
            <UsersComponent users={users}/>
        </div>
    );
}

export default App;