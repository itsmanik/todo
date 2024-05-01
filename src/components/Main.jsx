import TodoItem from "./TodoItem";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function Main() {
    let [todos, setTodos] = useState([]);
    let [text, setText] = useState("");

    function onAdd() {
        setTodos(function (prevItems) {
            return [...prevItems, text];
        });
        setText("");
    }

    function onDelete(id) {
        setTodos(function (prevItems) {
            return prevItems.filter(function (item) {
                return item !== todos[id - 1];
            });
        });
    }

    function onChange(text) {
        setText(text);
    }

    return (
        <main className="text-white min-h-[75vh]">
            <div className="flex justify-center w-96 m-auto">
                <Input change={onChange} text={text} />
                <Button add={onAdd} />
            </div>
            {todos.map(function (todo, index) {
                return (
                    <TodoItem
                        title={todo}
                        key={index}
                        id={index + 1}
                        onDelete={onDelete}
                    />
                );
            })}
        </main>
    );
}

export default Main;
