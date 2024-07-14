import { useState } from "react";

const ToDoScreen = () => {

// const [taskCount, setTaskCount] = useState(0)\
const [taskList, setTaskList] = useState([]);


return(
    <div className="screen">
      <h1 className="ui heading center">Hello! I am from Punjab</h1>
      <div>
        <button onClick={(e) => {
          setTaskList([...taskList,
            {
            title: "Go to School",
            description:"Go to School for Study",
            },
         ]);
        //   setTaskCount(taskCount + 1);
        }} 
        className="btSet">Add Task
        
        </button>

        {/* <p>The number of task are: {taskCount}</p> */}
        {/* <p>The the number of task are: {taskList.length}</p> */}

        {taskList.map((task) =>(
            <task />
            ))}
      </div>
    </div>
  );

};

export default ToDoScreen;