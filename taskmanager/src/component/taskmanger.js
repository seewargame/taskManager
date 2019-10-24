import React, { useState } from 'react';
import TaskInfo from './taskinfo';



export default function TaskManager(props) {
    const [tasks, setTasks] = useState([]);
    const [taskInfo, setTaskInfo] = useState([]);
    const [isClicked, setIsClicked] = useState(false)

    function fetchData() {
        fetch('http://localhost:4000/tasks')
            .then(res => res.json())
            .then((data) => {
                setTasks(data)
            })
    }


    function findId(e) {
        let val = e.target.parentNode.firstElementChild.innerHTML;
        const result = tasks.find(taskInfo => taskInfo.id === val)
        setTaskInfo(result)
        setIsClicked(true)
    }

    return (
        <div className="container mt-3" >
            <h1 className="text-center ">Task Manager</h1>
            <button onClick={fetchData}>Show All Tasks</button>
            <table className="table table-borderless table-hover mt-2">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"> &#35; </th>
                        <th scope="col">Task Name </th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Responsible</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((lists, index) =>
                        <tr key={index} onClick={findId}>
                            <th scope="row">{lists.id}</th>
                            <td>{lists.taskName}</td>
                            <td>{lists.startDate}</td>
                            <td>{lists.deadline}</td>
                            <td>{lists.responsible}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {isClicked && <TaskInfo taskInfo={taskInfo} />}
        </div>
    )
}