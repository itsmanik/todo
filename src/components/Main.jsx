import TodoItem from "./TodoItem";
import Input from "./Input";
import Button from "./Button";

function Main() {
    return (
        <main className="text-white min-h-[75vh]">
            <div className="flex justify-center w-96 m-auto">
                <Input />
                <Button />
            </div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </main>
    );
}

export default Main;
