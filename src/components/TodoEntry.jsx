import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { observer } from 'mobx-react';

const ENTRY_KEY = 13;

@observer(['todoListStore'])
class TodoEntry extends Component {
  static propTypes = {
    todoListStore: React.PropTypes.object.isRequired,
  };

  handleKeydown(e) {
    if (e.keyCode !== ENTRY_KEY) {
      return;
    }

    e.preventDefault();

    const title = e.target.value;
    if (title) {
      this.props.todoListStore.addTodo(title);
    }
    ReactDom.findDOMNode(this.refs.entry).value = '';
  }

  /* eslint-disable max-len */
  render() {
    return (
      <div className="entry">
        <h1>國中二年級時的夢想</h1>
        <input type="text" placeholder="寫下那些年的夢想吧！少年" onKeyDown={(e) => this.handleKeydown(e)} ref="entry" />
      </div>
    );
  }
  /* eslint-disable max-len */
}

export default TodoEntry;
