//Main component row

import { DeleteButton } from "./DeleteButton";
import { DisableButton } from "./DisableButton";
import { InputField } from "./InputField";
import { OperationDropdown } from "./OperationDropdown";

export const Row = (props) => {

    const { row } = props;

    let focus = false;

    //User click on delete button
    const handleDeleteClick = () => {
        //Call parent prop
        props.deleteRow(row);
    };

    //User click on disable button 
    const handleDisableClick = () => {
        //Call parent prop
        props.toggleDisableRow(row);
    };

    //User enter value in the input box
    const handleOnChangeValue = (value) => {
        //Call parent prop
        props.updateRowByValue(row,value);
    };

    //User change operation from select box
    const handleOnChangeOperation = (value) => {

        //Call parent prop
        props.updateRowByOperation(row,value);
    };
    //Handle errors when typing by user
    const handleValidationError = (message)=>{

        //Pass to parent prop
        props.onValidationError(message);
    }

    // Return entire row HTML
    return (
        <li >
            <OperationDropdown onChange={handleOnChangeOperation} isDisabled={row.isDisabled}/>
            <InputField focus={focus} onChange={handleOnChangeValue} isDisabled={row.isDisabled} onValidationError={handleValidationError}/>
            <DisableButton onClick={handleDisableClick} isDisabled={row.isDisabled}/>
            <DeleteButton onClick={handleDeleteClick}/>
        </li>
    );
}