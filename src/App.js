import './App.css';

function App() {
  const persons = ["Sakib","Bappi","Rubel"];
  return (
    <div className="App">
      {
        persons.map(person=>
          <Player name={person}></Player>
        )
      }
    </div>
  );
}

// Component Player
function Player(props){
  return (
      <h4>Name: {props.name}</h4>
    )
}

export default App;
