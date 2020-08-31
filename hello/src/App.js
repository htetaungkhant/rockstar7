import React from 'react';
import './App.css';

import List from './components/List';
import Item from './components/Item';

class App extends React.Component {

  state = {
    data: [
      { _id: 1, name: 'htet', age: 10 },
      { _id: 2, name: 'aung', age: 11 },
      { _id: 3, name: 'khant', age: 12 }
    ]
  }

  input = React.createRef();

  add = () => {
    const last_index = this.state.data.length - 1;
    const _id = this.state.data[last_index]._id + 1;
    // const _id = this.state.data.length + 1;
    const name = this.input.current.value;

    this.setState({
      data: [...this.state.data, { _id, name }]
    });
  }

  remove = _id => () => {
    this.setState({
      data: this.state.data.filter(user => user._id !== _id)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Good</h1>
        <List>
          {
            this.state.data.map(user => {
              return (
                <Item
                  key={user._id}
                  _id={user._id}
                  name={user.name}
                  remove={this.remove} />
              )
            })
          }
        </List>
        <input type="text" ref={this.input} />
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }
}

export default App;
