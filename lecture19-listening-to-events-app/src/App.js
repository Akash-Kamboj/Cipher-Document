import { Component} from "react";

class App extends Component{

 
  state = {
    taskCount: 0,
  };
  render()
  {
    return(
      <div className="screen">
        <h1 className="ui heading center">Hello! I am from Punjab</h1>
        <div>
          <button onClick={(e) => {
            this.setState({
              ...this.state,
              taskCount: this.state.taskCount + 1,

            });
            // console.log("Add Task Button was clicked");
            console.log(this.state.taskCount);
          }} className="btSet">Add Task</button>

          <p>The number of task are: {this.state.taskCount}</p>
        </div>
      </div>
    )
  }
}

export default App;
