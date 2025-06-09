
GPT TODO 

import React, { useState } from "react";

const Input = () => {
    const [task, setTask] = useState("");          // For input field
    const [taskList, setTaskList] = useState([]);  // For list of tasks

    const handleAdd = () => {
        if (task.trim() === "") return;
        setTaskList([...taskList, task]);
        setTask(""); // Clear input
    };

    const handleDelete = (index) => {
        const updatedList = taskList.filter((_, i) => i !== index);
        setTaskList(updatedList);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    📝 To-Do List
                </h2>

                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
                    >
                        Add
                    </button>
                </div>

                <ul className="mt-6 space-y-2">
                    {taskList.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow text-gray-700"
                        >
                            {item}
                            <button
                                onClick={() => handleDelete(index)}
                                className="text-red-500 font-bold hover:text-red-700"
                            >
                                ✖
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Input;
