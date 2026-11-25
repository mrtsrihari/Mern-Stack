import Home from "./Home"
import './App.css'

function Players(props){
  return (
    <>
      <h2>List of Players</h2>
      <div className="player-list">
        {props.data.map((player) => (
          <div className="player-card" key={player.name}>
            <h3>Player Name: {player.name}</h3>
            <h3>Team: {player.Team}</h3>
          </div>
        ))}
      </div>
    </>
  )

}

function Data(prop){
  console.log(prop);
  return(
    <>
    <h2>Data Component</h2>
    <h2>College Name: {prop.obj}</h2>
    {/* <h2>Student Name: {prop.obj2}</h2> */}
    </>
  )
}

function App(){
  let players_data=[
    {
    name:"Kohli",
    Team:"India"
    },
    {
      name:"Dhoni",
      Team:"India"
    },
    {
      name:"Sachin",
      Team:"India"
    },
    {
      name:"Vishnu",
      Team:"India"
    }
  ]

  return (
    <div>
      <h1>This is App component</h1>
      <h2>Tharun , Rajesh , Vishnu</h2>
      <Home/>
      <Data obj="SECE College" />
      {/* <Data obj2="Vishnu"/> */}
      <Players data={players_data}/>
    </div>
  )
}

export default App