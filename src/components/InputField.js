export const InputField = (props) => {

    //handle value change in input box
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
    }

    //only number allowed to enter by using keyPress event
    return <input type="text" disabled={props.isDisabled} onChange={handleOnChange} placeholder="Enter the number" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }} />;
}