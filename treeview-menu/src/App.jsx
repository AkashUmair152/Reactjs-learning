import "./App.css";
import menus from "./treeView/data"
import TreeView from "./treeView/TreeView";

function App() {
  return (
    <>
      <TreeView menus={menus}/>
    </>
  );
}

export default App;
