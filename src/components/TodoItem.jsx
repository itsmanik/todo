import { MdDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconContext } from "react-icons";

function TodoItem() {
    return (
        <div className="todo-item flex [&>*]:w-14 pr-1 rounded-md mt-2 bg-secondary-color w-96 m-auto h-11 items-center">
            <span className="text-center text-lg">1</span>
            <span className="[&&]:w-full">Iron Clothes</span>
            <IconContext.Provider
                value={{ size: "1.2em", className: "done-icon" }}
            >
                <button className="text-center cursor-pointer flex justify-center h-full items-center">
                    <MdDone />
                </button>
            </IconContext.Provider>
            <IconContext.Provider
                value={{ size: "1.2em", className: "delete-icon" }}
            >
                <button className="cursor-pointer flex justify-center h-full items-center">
                    <RiDeleteBinLine />
                </button>
            </IconContext.Provider>
        </div>
    );
}

export default TodoItem;
