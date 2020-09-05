import React, { useState } from 'react';
import { List, Divider } from '@material-ui/core'

import Header from './components/Header';
// import List from './components/List';
import Item from './components/Item';
import Add from './components/Add';

function App() {

  const [tasks, setTask] = useState([
    { _id: 1, subject: 'Milk', status: 0 },
    { _id: 2, subject: 'Bread', status: 1 },
    { _id: 3, subject: 'Butter', status: 0 }
  ]);

  const add = subject => {
    const _id = tasks[tasks.length - 1]._id + 1;

    setTask([
      ...tasks, { _id, subject, status: 0 }
    ]);
  }

  const remove = _id => () => {
    setTask(tasks.filter(task => task._id !== _id));
  }

  const toggle = _id => () => {
    setTask(tasks.map(task => {
      if (task._id === _id) task.status = +!task.status;
      return task;
    }));
  }

  const clear = () => {
    setTask(tasks.filter(task => task.status === 0));
  }

  return (
    <div>
      <Header
        clear={clear}
        count={tasks.filter(task => task.status === 0).length} />
      <Add add={add} />
      <List>
        {tasks.filter(task => task.status === 0).map(task => {
          return (
            <Item
              key={task._id}
              task={task}
              toggle={toggle}
              remove={remove} />
          )
        })}
      </List>
      <Divider />
      <List>
        {tasks.filter(task => task.status === 1).map(task => {
          return (
            <Item
              key={task._id}
              task={task}
              toggle={toggle}
              remove={remove} />
          )
        })}
      </List>
    </div>
  );
}

export default App;
