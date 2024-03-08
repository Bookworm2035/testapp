import React from 'react';
// import logo from './logo.svg';
import './App.css';
import yourData from './CollegeBasketballTeams.json';

const teamNames = yourData.teams;
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

// const teamNames = [];

function Welcome() {
  return <h1>Welcome to my Basketball Teams Site </h1>;
}
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
function TeamList() {
  // { teams }: { teams: TeamProps[] }
  return (
    <div>
      {/* <Team {...teamNames[0]}/> */}
      {/* {teams.map((oneTeam) => ( */}
      {teamNames.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
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
    <div className="App">
      <Welcome />
      <br></br>
      <TeamList />
      {/* teams={teams} */}
    </div>
  );
}
export default App;
