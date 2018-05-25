import React from 'react';
import TeamRow from './TeamRow'

class TeamLeaderboard extends React.Component {
  constructor(props) {
      super(props);

    }

    render() {
        return (
            <div class="container">
              <h3 className="tableName">Team Leaderboard</h3>
                <table>
                  <thead>
                    <tr className="table">
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.keys(this.props.allTeams)
                    .map((teamName) => this.props.allTeams[teamName])
                    .sort((teamA, teamB) => {
                      return parseInt(teamA.score) < parseInt(teamB.score);
                    })
                    .map((team, index) => {
                        return (
                            <TeamRow key={index} rowNumber={index} team={team} />
                        );
                    })
                  }
                  </tbody>
                </table>
            </div>
        );
    }
}

export default TeamLeaderboard;
