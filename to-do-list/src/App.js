import React, { useState } from 'react';

import Header from './components/Header';
import List from './components/List';
import Item from './components/Item';

function App() {

  const [tasks, setTask] = useState([
    { _id: 1, subject: 'Milk', status: 0 },
    { _id: 2, subject: 'Bread', status: 1 },
    { _id: 3, subject: 'Butter', status: 0 }
  ]);

  const toggle = _id => () => {
    setTask(tasks.map(task => {
      if (task._id === _id) task.status = +!task.status;
      return task;
    }));
  }

  return (
    <div>
      <Header count={tasks.filter(task => task.status === 0).length} />
      <List>
        {tasks.filter(task => task.status === 0).map(task => {
          return (
            <Item
              key={task._id}
              task={task}
              toggle={toggle} />
          )
        })}
      </List>
      <hr />
      <List>
        {tasks.filter(task => task.status === 1).map(task => {
          return (
            <Item
              key={task._id}
              task={task}
              toggle={toggle} />
          )
        })}
      </List>
    </div>
  );
}

export default App;
