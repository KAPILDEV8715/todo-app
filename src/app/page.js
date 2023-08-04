"use client";
import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);


  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTodo('');
  };

  const handleUpdateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Todo List</h1>
      <ul style={{ textAlign: "center" }}>
        <input type="text" value={newTodo} onChange={handleInputChange} style={{ color: "Blue" }} />
        <button onClick={handleAddTodo}  >Add Todo</button>
      </ul>
      <br />
      <li style={{ textAlign: "center" }}>


        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            {updateIndex == index &&
              <>

                <input
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={() => handleUpdateTodo(updateIndex, newTodo)}> uodate </button>
              </>
            }
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => setUpdateIndex(index)}>Edit</button>
          </li>

        ))}

        {/* {editTodo && todos.map((todo, index) => (
          <li key={index}>
            <input
              style={{ color: "Blue" }}
              type="text"
              value={todo}
              onChange={(e) => handleUpdateTodo(index, e.target.value)}
            />
            <button onClick={() => setEditTodo(false)}>Save Todo</button>
          </li>

        ))} */}
      </li>
    </div>
  );
}
