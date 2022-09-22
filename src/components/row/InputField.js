import { useRef, useEffect } from "react";

export const InputField = (props) => {

    const myRef = useRef(null);

    //User type in input box
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
    }

    //Show error when user enter wrong data
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
        <input type="text" 
            ref={myRef} 
            disabled={props.isDisabled} 
            onChange={handleOnChange} 
            placeholder="Enter the number" 
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    handleValidationError('You can only enter number.')
                    event.preventDefault();
                }
             }} 
        />
    );
}