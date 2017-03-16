import { observable, action, computed } from 'mobx';
import TodoModel from '../models/todoModel';
import shortid from 'shortid';

class TodoListStore {
  @observable todos = [];

  @computed get totalTodoCount() {
    return this.todos.length;
  }

  @computed get activeTodoCount() {
    // perfect
    return this.todos.reduce((sum, todo) => sum + (todo.finished ? 0 : 1), 0);
  }

  @computed get finishedTodoCount() {
    return this.totalTodoCount - this.activeTodoCount;
  }

  @action addTodo(title) {
    this.todos.push(new TodoModel(this, shortid.generate(), title, false));
  }

}

export default new TodoListStore();
