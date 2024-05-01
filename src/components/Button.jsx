function Button(props) {
    return (
        <button onClick={props.add} className="bg-accent-color ml-2 text-2xl cursor-pointer hover:bg-[#26cdc5] font-bold hover:shadow-accent-color hover:shadow font-serif w-12 rounded-md h-11 flex justify-center items-center">
            +
        </button>
    );
}

export default Button;
