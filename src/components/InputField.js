import { useRef, useEffect } from "react";

export const InputField = (props) => {

    const myRef = useRef(null);

    //Handle value change in input box
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
    }

    //Handle errors when typing by user
    const handleValidationError = (message)=>{
        props.onValidationError(message);
    }

    //Focus on input
    const focusField = ()=>{
        myRef.current.focus();
    }

    //Focus when creating new row
    useEffect(() => {
            focusField();
    }, []);

    //Only number allowed to enter by using keyPress event
    return (
        <input type="text" ref={myRef} disabled={props.isDisabled} onChange={handleOnChange} placeholder="Enter the number" onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
                handleValidationError('You can only enter number.')
                event.preventDefault();
            }
        }} />
    );
}