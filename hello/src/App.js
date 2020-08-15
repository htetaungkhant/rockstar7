import React from 'react';
import './App.css';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

class App extends React.Component {

  state = {
    data : [
      { name: 'htet', age: 10},
      { name: 'aung', age: 11},
      { name: 'khant', age: 12}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Good</h1>
        <ul>
          {
            this.state.data.map(user => {
              return (
                <Item name={user.name} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
