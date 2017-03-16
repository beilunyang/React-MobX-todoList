import React from 'react';
import { observer } from 'mobx-react';
import DevTool from 'mobx-react-devtools';
import TodoEntry from './TodoEntry';
import TodoList from './TodoList';

const App = function App() {
  return (
    <div className="main">
      <DevTool />
      <TodoEntry />
      <TodoList />
    </div>
  );
};

export default observer(App);
