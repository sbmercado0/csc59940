import React from 'react';
import IndividualRow from './IndividualRow';
//import Main.css;

class IndividualLeaderboard extends React.Component {
  constructor(props) {
      super(props);

    }

    
    render() {
        return (
            <div class="container">
              <h3 className="tableName">Individual Leaderboard</h3>
                <table>
                  <thead>
                    <tr className="table">
                        <th>Rank</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Score</th>
                        <th>Accuracy</th>
                        <th>Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.allPlayers
                        .sort((playerA, playerB) => {
                            return parseInt(playerA.score) < parseInt(playerB.score);
                        })
                        .map((player, index) => {
                            console.log("index is " + index)
                            return ( 
                                <IndividualRow key={index} rowNumber={index} player={player} /> 
                            );
                        })
                    }
                  </tbody>
                </table>
            </div>
        );
    }
}
   
export default IndividualLeaderboard;
