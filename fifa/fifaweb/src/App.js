import React from 'react';
import {useState} from 'react';
import NewExpense from './components/NewExpense';
import Expenses from "./components/Expenses";
import './App.css';
import ob1 from './imgs/fef.jpg'
import { Helmet } from 'react-helmet';
import HerbWypisz from './components/HerbWypisz';
import Teams from './components/Teams'
import {v4 as uuidv4} from 'uuid';
import ExpenseForm from './components/ExpenseForm'

import './components/NewExpense.css';
import Herb from './components/Herb';

function App() {


  const [teamss, setTeamss] = useState(
    [
      {
        player:"p4blit00",
        teamName:"KS Mierzynianka",
        id: "sdwa",
        score: 0
      }
    ]
  );
  function newTeam(player,teamName){
    const newTeam = {
      player: player,
      teamName: teamName,
      id: uuidv4(),
      score:0,
      
      
    };
    teamss.push(newTeam);
    setTeamss([...teamss, newTeam]);
  }
  return (
    
    <div>

      <Helmet>
        <title>Liga amatorów 2022/23</title>
      </Helmet>



      <header>
      <img src={ob1} id="ob1"/>
      </header>
      <div className='new-expense'>
        <ExpenseForm newTeam={newTeam}/>
    </div>
      <center><HerbWypisz/></center>
      {teamss.map((team)=> {
        return(
          <Teams
            teamName={team.teamName}
            player={team.player}
            id={team.id}
            score={team.score}

            />
        );
      })}
      </div>
      
  );
}

export default App;
