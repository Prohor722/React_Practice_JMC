import './App.css';

function App() {
  const persons = ["Sakib","Bappi","Rubel"];
  const casts = [{hero:"rajkumar", heroin:"sabila"},{hero:"amir",heroin:"purnima"},{hero:"hero alom",heroin:"deepika"},{hero:"sakib khan", heroin:"angelina"}];
  return (
    <div className="App">
      {
        persons.map(person=>
          <Player name={person}></Player>
        )
      }
      {
        casts.map(cast=><Film hero={cast.hero} heroin={cast.heroin} />)
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

// Component Film 
function Film(props){
  return (
    <>
      <h1>Hero: {props.hero}</h1>
      <h3>Heroin: {props.heroin}</h3>
    </>
  )
}
export default App;
