import { Route } from "react-router-dom";
import TodoLists from "./TodoLists";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path={"/"} exact component={Home} />
      <Route path={"/todolist"} component={TodoLists} />
    </div>
  );
};

export default App;
