import TodoItem from "./TodoItem";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Main() {
    let [todos, setTodos] = useState([
        { content: "do something", isDone: false },
    ]);
    // [{text: "work", isDone: true}]
    let [text, setText] = useState("");

    function onAdd() {
        setTodos(function (prevItems) {
            return [...prevItems, { content: text, isDone: false }];
        });
        setText("");
    }

    function onDelete(id) {
        setTodos(function (prevItems) {
            return prevItems.filter(function (item) {
                return item !== todos[id];
            });
        });
    }

    function onChange(text) {
        setText(text);
    }

    function toggleIsDone(id) {
        // console.log(id);
        setTodos(function (prevItems) {
            return prevItems.map(function (item, index) {
                if (index == id) {
                    return {
                        content: item.content,
                        isDone: true,
                    };
                }
                return item;
            });
        });
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
                        title={todo.content}
                        key={uuidv4()}
                        id={index}
                        onDelete={onDelete}
                        toggleIsDone={toggleIsDone}
                        isDone={todo.isDone}
                    />
                );
            })}
        </main>
    );
}

export default Main;
