// TodoList.js

import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (!todo) return;
    const newTodos = [...todos, { text: todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo('');
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <div>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </div>

      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
