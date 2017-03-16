import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer(['todoListStore'])
class TodoItem extends Component {
  static propTypes = {
    todoListStore: React.PropTypes.object.isRequired,
    todo: React.PropTypes.object.isRequired,
  }

  changeStatus(e) {
    e.preventDefault();
    this.props.todo.toggle();
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.todo.remove();
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.finished ? 'finished' : ''}>
        <input type="checkbox" onClick={(e) => this.changeStatus(e)} />
        {todo.title}
        <a href="#" onClick={(e) => this.deleteTodo(e)} className="x"></a>
      </li>
    );
  }
}

export default TodoItem;
