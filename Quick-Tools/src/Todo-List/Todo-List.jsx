import { useState } from 'react';
export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    function addTask() {
        if (newTask.trim() === "") return;
        setTasks(t => [...t, { text: newTask, completed: false }]);
        setNewTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if(index > 0){
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            setTasks(newTasks);
        }
    }
    function moveTaskDown(index) {
       if(index < tasks.length - 1){
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTasks(newTasks);
       }
    }
    function clearAllTasks() {
       setTasks([]);
    }
    function markAllCompleted() {
        const newTasks = tasks.map(task => ({ ...task, completed: true }));
        setTasks(newTasks);
    }
    function markAllUncompleted() {
       const newTasks = tasks.map(task => ({ ...task, completed: false }));
        setTasks(newTasks);
    }
    function markTaskCompleted(index) {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }   

    return (
        <div className="min-h-screen">
            <h1 className="text-3xl p-4 mx-auto text-center  shadow-xl mb-5 bg-[#b8e2faff] rounded">To-do List</h1>
            <div className='flex'>
                <input type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="border p-2 w-60 mx-2"
                />
                <button className='border rounded-xl m-2 text-xl w-35 hover:bg-blue-100 hover:text-lg' onClick={addTask}>Add</button>
            </div>
            <div className='flex justify-center'>
                <button className='border rounded-xl m-2 text-xl w-60 h-10 hover:bg-red-100 hover:text-lg' onClick={clearAllTasks}>Clear All</button>
                <button className='border rounded-xl m-2 text-xl w-60 hover:bg-green-100 hover:text-lg' onClick={markAllCompleted}>Mark All Completed</button>
                <button className='border rounded-xl m-2 text-xl w-60 hover:bg-yellow-100 hover:text-lg' onClick={markAllUncompleted}>Mark All Uncompleted</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "bg-green-100 border rounded-xl p-2 m-2 flex justify-between items-center" : "border rounded-xl p-2 m-2 flex justify-between items-center "}>
                        <span className={task.completed ? "line-through" : ""}>{task.text}</span>
                        <div>
                            <button className='bg-blue-200 hover:bg-blue-400 hover:text-lg rounded-xl m-1 w-10' onClick={() => moveTaskUp(index)}>↑</button>
                            <button className='bg-pink-200 hover:bg-pink-400 hover:text-lg rounded-xl m-1 w-10' onClick={() => moveTaskDown(index)}>↓</button>
                            <button className='rounded-xl m-1 w-30 bg-green-400 hover:bg-green-600 hover:text-lg' onClick={() => markTaskCompleted(index)}>{task.completed ? "Uncomplete" : "Complete"}</button>
                            <button className='rounded-xl m-1 w-17 bg-red-700 text-white hover:bg-red-600 hover:text-lg' onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );  
}
