import './App.css';
import { getTodos } from './TodoService';

const App = () => (
  <div className="container">
    <div className="card">
      <h1 className="title">To-do</h1>
      <div className="list-wrapper">
        <ul className="list">
          <li>
            <span className="text">Do the dishes</span>
            <input className="check" type="checkbox" />
          </li>
          <li>
            <span className="text">Do them again</span>
            <input className="check" type="checkbox" />
          </li>
          <li>
            <span className="text">Do them a third time</span>
            <input className="check" type="checkbox" />
          </li>
        </ul>
        <button className="primary-button">+</button>
      </div>
    </div>
  </div>
);

const AddTodoForm = () => (
  <div className="form">
    <input type="text" />
    <button className="primary-button">+</button>
  </div>
);

export default App;
