import React from 'react';
//import Main.css;

class IndividualRow extends React.Component {
  constructor(props) {
      super(props);

    }

  render() {
    return (
      <tr>
          <th scope="row">{this.props.rowNumber + 1}</th>
          <td>{this.props.player.firstName}</td>
          <td>{this.props.player.lastName}</td>
          <td>{this.props.player.score}</td>
          <td>{this.props.player.accuracy}%</td>
          <td>{this.props.player.name}</td>
      </tr>
    )

  }

  }

export default IndividualRow;
