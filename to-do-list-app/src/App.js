import React from 'react';
import './App.css';

import Header from './components/Header';
import List from './components/List/List';
import ToDoForm from './components/Form/ToDoForm';

var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });
class ToDoApp extends React.Component {

  render() {
    return (
      <div id="main">
        <Header/>
        <ToDoForm/>
        <List items={todoItems} />
      </div>

    )
  }


}

export default ToDoApp;
