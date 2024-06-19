import Button from "./Button.jsx";
import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, selectedProjectId, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && <p className="text-stone-800 my-4"> This project does not have any tasks yet</p>}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => {
                    if (task.projectId === selectedProjectId)
                        return(<li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <Button onClick={()=>onDelete(task.id)}>Delete</Button>
                        </li>)
                })}
            </ul>}
        </section>
    )
}