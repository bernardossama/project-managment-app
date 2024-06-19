import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef()

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-500 my-4 text-center"> Invalid Input</h2>
                <p className="text-stone-800 text-center"> Oops... Looks like you forgot to enter a value</p>
                <p className="text-stone-800 text-center">Please make sure you provide a valid value for every input field.</p>

            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label="Title" type="text"></Input>
                    <Input ref={description} label="Description" textArea></Input>
                    <Input ref={dueDate} label="Due Date" type="date"></Input>
                </div>
            </div>
        </>
    )
}