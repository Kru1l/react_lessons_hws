import './App.css';
import UsersContainer from "./components/UsersContainer/UsersContainer";

function App() {
  return (
    <div className="App">
      <UsersContainer/>
    </div>
  );
}

export default App;

// Зробити компонент, в якому буде форма,
// за допомоги якої можливо створити нового юзера постовим запитом на
// https:jsonplaceholder.typicode.com/users