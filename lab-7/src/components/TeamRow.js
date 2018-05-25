import React from 'react';
//import Main.css;

class TeamRow extends React.Component {
  constructor(props) {
      super(props);

    }

  render() {
    console.log(this.props.team)
    return (
      <tr>
          <th scope="row">{this.props.rowNumber + 1}</th>
          <td style={{color: this.props.team.name}}>{this.props.team.name}</td>
          <td>{this.props.team.score}</td>
      </tr>
    )

  }

}

export default TeamRow;
