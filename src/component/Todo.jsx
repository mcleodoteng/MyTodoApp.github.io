import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
};
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className="flex">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="cursor-pointer items-center flex"
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
Todo.propTypes = {
  todo: PropTypes.any,
  toggleComplete: PropTypes.any,
  deleteTodo: PropTypes.any,
};
