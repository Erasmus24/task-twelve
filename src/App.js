import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task6 from "./pages/Task6";
import Task7 from "./pages/Task7";
import Task8 from "./pages/Task8";
import Task9 from "./pages/Task9";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
          <Route path="/task3" component={Task3} />
          <Route path="/task4" component={Task4} />
          <Route path="/task5" component={Task5} />
          <Route path="/task6" component={Task6} />
          <Route path="/task7" component={Task7} />
          <Route path="/task8" component={Task8} />
          <Route path="/task9" component={Task9} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
