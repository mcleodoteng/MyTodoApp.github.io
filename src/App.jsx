import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./component/Todo";
import {
  collection,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { query, onSnapshot } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f88ed] to-[#1cb5e0]`,
};
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");
  //Create Todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid Todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setinput("");
  };
  //Read Todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  //Update Todo in
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <>
      <div className={style.bg}>
        <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 ">
          <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
            Todo App
          </h3>
          <form onSubmit={createTodo} className="flex justify-between">
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              className="border p-2 w-full text-xl"
              type="text"
              placeholder="Add Todo"
            />
            <button className="border text-slate-100 p-4 ml-2 bg-purple-500">
              <AiOutlinePlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className="text-center p-2">{`You have ${todos.length} todos`}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
