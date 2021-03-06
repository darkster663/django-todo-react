import React, { Component } from 'react';

const todoItems = [
  {
    id: 1,
    title: 'Driving lesson',
    description: 'Don\'t forget about your driving lesson tomorrow morning',
    completed: false
  },
  {
    id: 2,
    title: 'Gym session',
    description: 'Don\'t forget about going to the gym tomorrw',
    completed: true 
  },
  {
    id: 3,
    title: 'Creatine',
    description: 'Remember to take your daily creatine',
    completed: false
  },
  {
    id: 4,
    title: 'Dungeons',
    description: 'Remember to kill some dungeon bosses',
    completed: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems
    };
  }

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active": ""}>Complete
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}>Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(item => item.completed === viewCompleted);
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center">
          <span
            className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.description}>{item.title}
          </span>
          <span>
            <button className="btn btn-secondary mr-2"> Edit </button>
            <button className="btn btn-danger"> Delete </button>
          </span>
      </li>
    ))
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;