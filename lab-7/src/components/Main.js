import React from 'react';
import IndividualLeaderboard from './IndividualLeaderboard';
import TeamLeaderboard from './TeamLeaderboard';
import AddPlayer from './AddPlayer';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        players: [],
        teams: {}
      };

      this.addToPlayers = this.addToPlayers.bind(this);
    }

    updateTeams(newPlayer) {
      const teams = Object.assign({}, this.state.teams);
      const newPlayerTeamName = newPlayer.name;
      const team = Object.assign({}, teams[newPlayerTeamName])

      console.log("current team is " + team)

      if(!team.name) {
        team.name = newPlayerTeamName;
      }

      if(!team.score) {
        team.score = 0;
      }

      team.score += parseInt(newPlayer.score)

      teams[newPlayerTeamName] = team;
      console.log("the teams are " + teams)
      this.setState({teams:teams});
    }

    addToPlayers(player){
      const players = this.state.players.concat(player);
      this.setState({
            players: players
      });

      this.updateTeams(player)
    }

    render() {
        return (
            <div class="container">
                <h1 id="top-header">Laser Tag Leaderboard</h1>
                <IndividualLeaderboard allPlayers={this.state.players}/>
                <TeamLeaderboard allTeams={this.state.teams}/>
                <AddPlayer addToPlayers={this.addToPlayers}/>
            </div>
        );
    }
}

export default Main;
