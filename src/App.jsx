import "./styles.css";
import { useState } from "react";

//Pegar o input
//Adicionar Tarefa
//Eliminar Tarefa
//Atualizar Tarefa

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  function getInputValue(e) {
    setInputValue(e.target.value);
  }
  function addTask() {
    setTodoList([
      ...todoList,
      {
        id: Math.random() * 1000000,
        text: inputValue,
        isCompleted: false
      }
    ]);
    setInputValue("");
  }

  function deleteTask(taskId) {
    const filteredTask = todoList.filter((task) => task.id !== taskId);
    console.log(filteredTask);
    setTodoList("");
    setTodoList(filteredTask);
  }

  return (
    <div className="container">
      <h1>MY TODO LIST</h1>
      <div className="inputContainer">
        <input type="text" onChange={getInputValue} value={inputValue} />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="listContainer">
        {todoList == "" ? (
          <center>
            <small>Add something to the list!</small>
          </center>
        ) : (
          <center>
            <ul>
              <div className="list">
                {todoList.map((task) => (
                  <li key={task.id}>
                    <div>{task.text}</div>
                    <div>
                      <button onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </center>
        )}
      </div>
    </div>
  );
}
