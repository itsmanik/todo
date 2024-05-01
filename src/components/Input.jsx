function Input(props) {
    return (
        <input
            type="text"
            placeholder="title"
            className="px-4 rounded-md bg-secondary-color outline-none w-full"
            onChange={function (event) {
                props.change(event.target.value);
            }}
            value={props.text}
            name="input"
        ></input> 
    );
}

export default Input;