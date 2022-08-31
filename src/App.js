import './App.css';
import { useState, useEffect, createRef } from 'react';
import { getTodos } from './TodoService';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [addTodoFormToggled, setAddTodoFormToggled] = useState(false);

  useEffect(() => {
    (async () => {
      const todosFromService = await getTodos();
      setTodos(todosFromService);
    })();
  }, []);

  const toggleAddTodoForm = () => {
    setAddTodoFormToggled(!addTodoFormToggled);
  };

  const addTodo = (text) => {
    setTodos(existingTodos => [...existingTodos, { text, isChecked: false }])
    toggleAddTodoForm();
  };

  const toggleTodo = (index) => {
    setTodos(existingTodos => {
      const updatedTodos = [...existingTodos];
      updatedTodos[index].isChecked = !updatedTodos[index].isChecked;
      return updatedTodos;
    });
  };

  return (
    <Layout>
      <TodoList addTodo={addTodo} addTodoFormToggled={addTodoFormToggled} toggleAddTodoForm={toggleAddTodoForm} >
        {todos.map((todo, index) => <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />)}
      </TodoList>
    </Layout>
  );
}

const Layout = ({ children }) => (
  <div className="container">
    <div className="card">
      <h1 className="title">To-do</h1>
      {children}
    </div>
  </div>
);

const TodoList = ({ children, addTodo, addTodoFormToggled, toggleAddTodoForm }) => (
  <div className="list-wrapper">
    <ul className="list">
      {children.length !== 0
        ? children
        : <li>Waiting for todos...</li>}
    </ul>
    {addTodoFormToggled 
      ? <AddTodoForm addTodo={addTodo} />
      : <button className="primary-button" onClick={toggleAddTodoForm}>+</button>}
  </div>
);

const TodoItem = ({ todo, toggleTodo }) => (
  <li>
    <span className="text">{todo.text}</span>
    <input className="check" type="checkbox" checked={todo.isChecked} onChange={toggleTodo} />
  </li>
);

const AddTodoForm = ({ addTodo }) => {
  const inputReference = createRef();

  return (
    <div className="form">
      <input type="text" ref={inputReference} />
      <button className="primary-button" onClick={() => addTodo(inputReference.current.value)}>+</button>
    </div>
  );
};

export default App;
