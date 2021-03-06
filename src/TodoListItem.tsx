import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        // style={{textDecooration: todo.complete ? 'line-through' : undefined }}
      >
        <input 
        type="checkbox"
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo)
        }}/>
        {todo.text}
      </label>
    </li>
  );
};