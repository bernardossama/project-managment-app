import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({ onAdd,  }) {

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text"
                onChange={handleChange}
                value={enteredTask} />
            <Button onClick={handleClick}>Add Task</Button>

        </div>
    )
}