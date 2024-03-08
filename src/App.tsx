import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import the json file with college data
import yourData from './CollegeBasketballTeams.json';
//set the data to a variable
const teamNames = yourData.teams;
//define an interface so prettier doesnt get mad at me
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  name: string;
  school: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}
//old way to do it
// const teamNames = [];

//welcome message
function Welcome() {
  return <h1>Welcome to my Basketball Teams Site </h1>;
}

//This will print out the info for a card
class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        {/* <img></img> */}
        <h2>{school}</h2>
        <h4>Mascot: {name}</h4>
        <h4>
          {city}, {state}
        </h4>
        <br></br>
      </div>
    );
  }
}
//this will print out all the cards
function TeamList() {
  // { teams }: { teams: TeamProps[] }
  return (
    <div>
      {/* old way of doing it */}
      {/* <Team {...teamNames[0]}/> */}
      {/* {teams.map((oneTeam) => ( */}
      {teamNames.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

//this calls the other functions and is the main function for the app
function App() {
  //This is how chat recommends doing it
  // const [teams, setTeams] = useState<TeamProps[]>([]);
  // useEffect(() => {
  //   fetchTeams();
  // }, []);

  // const fetchTeams = async () => {
  //   try {
  //     const response = await fetch('/CollegeBasketballTeams.json');
  //     const data = await response.json();
  //     setTeams(data.teams);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  return (
    //always in a div tag
    <div className="App">
      {/* call welcome function */}
      <Welcome />
      <br></br>
      {/* call teamList function */}
      <TeamList />
      {/* THIS WAS CHAT"S WAY teams={teams} */}
    </div>
  );
}

//tbh idk what this does but it is important
export default App;
