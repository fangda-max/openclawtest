import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React', completed: false },
    { id: 2, text: '创建 TodoList 项目', completed: true },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const activeCount = todos.filter(todo => !todo.completed).length;
  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo List</h1>
        
        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="添加新任务..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="todo-add">添加</button>
        </form>

        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            全部 ({todos.length})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            进行中 ({activeCount})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            已完成 ({todos.length - activeCount})
          </button>
        </div>

        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
              <button
                className="todo-delete"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <div className="empty-state">暂无任务</div>
        )}
      </div>
    </div>
  );
}

export default App;
