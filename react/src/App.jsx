import AddTodo from "./component/AddTodo";
import Todo from "./component/Todo";
import Todoitem2 from "./component/Todoitem2";
import Todoitem1 from "./Todoitem1";
import "./App.css";

const App = () => {
  return (
    <center className="TodoApp">
      <Todo />
      <AddTodo />
      <div className="item-container">
        {" "}
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
};

export default App;
