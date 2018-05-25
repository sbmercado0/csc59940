import React from 'react';


class AddPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        score: 0,
        accuracy: 0,
        name: 'Blue',
        value: ''
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      event.preventDefault();

      const inputName = event.target.name;
      const inputValue = event.target.value ;

      const state = {}
      state[inputName] = inputValue;

      console.log(state)

      this.setState({
        [inputName]: inputValue
      })

    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.addToPlayers(this.state)

      this.setState({
            firstName: '',
            lastName: '',
            score: '',
            accuracy: '',
            team: 'Blue'
        });


    }

    render() {
        return (
            <div class="container addTitle">
                <h3>Add Player</h3>
                <form onSubmit={this.handleSubmit}>
                  <div >
                    <label>
                    First Name:
                    </label>
                    <input placeholder="First Name" type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName"/>

                  </div>

                  <div>
                    <label>
                    Last Name:
                    </label>
                    <input placeholder="Last Name" type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName" />

                  </div>

                  <div>
                    <label>
                    Score:
                    </label>
                    <input placeholder="0" type="text" value={this.state.score} onChange={this.handleChange} name="score" />

                  </div>

                  <div>
                    <label>
                    Accuracy:
                    </label>
                    <input placeholder="0%" type="text" value={this.state.accuracy} onChange={this.handleChange} name="accuracy"/>

                  </div>

                  <div>
                  <label>
                     Team Name:
                  </label>
                     <select value={this.state.name} onChange={this.handleChange} name="name">
                       <option value='Blue'>Blue</option>
                       <option value='Green'>Green</option>
                       <option value="Red">Red</option>
                     </select>

                  </div>

                  <div>
                    <button className="btn btn-default btn-info" type="submit">Add</button>
                  </div>
                </form>
            </div>
        );
    }
}

export default AddPlayer;
