import React from 'react';

export default function TaskInfo(props) {
    return (
        <div className="container mt-3">
            <h1 className="text-center">Task Info</h1>
            <div>
                <div className="list-group-item">Task Name: {props.taskInfo.taskName} </div>
                <div className="list-group-item">Task Description: {props.taskInfo.taskDescription} </div>
                <div className="list-group-item">Start Date:{props.taskInfo.startDate} </div>
                <div className="list-group-item">Deadline: {props.taskInfo.deadline}</div>
                <div className="list-group-item">Responsible: {props.taskInfo.responsible}</div>
                <div className="list-group-item">Checklist of Subtasks:
                <div className="list-group"> {(props.taskInfo.checklistOfSubtasks).map((cl,index)=>
                    <div  className="list-group-item" key={index}>{cl}</div>
                    )}              
                    </div>
                </div>
            </div>
        </div>
    )
}