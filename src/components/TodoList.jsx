import React from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from './TodoItem';

/* eslint-disable no-alert */

const TodoList = function TodoList({ todoListStore }) {
  const { todos } = todoListStore;
  const todoList = todos.map((todo) => <TodoItem todo={todo} key={todo.id} />);
  const evaluate = function evaluate() {
    if (!todoListStore.totalTodoCount) {
      return alert('夢想是要有的，萬一實現了呢');
    }

    if (!todoListStore.finishedTodoCount) {
      if (todoListStore.activeTodoCount < 4) {
        return alert('加油, 少年');
      }
      return alert('你和鹹魚有什麼區別');
    }

    if (todoListStore.finishedTodoCount >= todoListStore.activeTodoCount) {
      return alert('千里之行，始於足下');
    }
    return alert('人生苦短, 加油');
  };
  return (
    <div className="dreambox">
      <ul>
        {todoList}
      </ul>
      <div className="statusbar">
        <span>夢想數: {todoListStore.totalTodoCount}</span>
        <span>未實現: {todoListStore.activeTodoCount}</span>
        <span>已實現: {todoListStore.finishedTodoCount}</span>
        <a href="#" onClick={evaluate}>查看評價</a>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todoListStore: React.PropTypes.object.isRequired,
};

export default inject('todoListStore')(observer(TodoList));
