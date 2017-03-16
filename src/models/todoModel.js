import { observable, action } from 'mobx';

class TodoModel {
  id;
  store;
  @observable title;
  @observable finished;
  constructor(store, id, title, finished) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.finished = finished;
  }

  @action toggle() {
    this.finished = !this.finished;
  }

  @action changeTitle(title) {
    this.title = title;
  }

  @action remove() {
    this.store.todos.remove(this);
  }

}

export default TodoModel;
