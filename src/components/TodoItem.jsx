import { MdDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconContext } from "react-icons";

let doneStyle = { textDecoration: "line-through"};

let darkStyle = { backgroundColor: "#001b1b" };

function TodoItem(props) {
    return (
        <div className="todo-item flex [&>*]:w-14 pr-1 rounded-md mt-2 bg-secondary-color w-96 m-auto h-11 items-center" style={props.isDone ? darkStyle : {} }>
            <span className="text-center text-lg">{props.id + 1}</span>
            <span
                className="[&&]:w-full"
                style={props.isDone ? doneStyle : {}}
            >
                {props.title}
            </span>
            <IconContext.Provider
                value={{ size: "1.2em", className: "done-icon" }}
            >
                <button
                    onClick={function () {
                        props.toggleIsDone(props.id);
                    }}
                    className="text-center cursor-pointer flex justify-center h-full items-center"
                >
                    <MdDone />
                </button>
            </IconContext.Provider>
            <IconContext.Provider
                value={{ size: "1.2em", className: "delete-icon" }}
            >
                <button
                    onClick={function () {
                        props.onDelete(props.id);
                    }}
                    className="cursor-pointer flex justify-center h-full items-center"
                >
                    <RiDeleteBinLine />
                </button>
            </IconContext.Provider>
        </div>
    );
}

export default TodoItem;
