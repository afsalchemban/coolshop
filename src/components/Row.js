//main component row

import { DeleteButton } from "./DeleteButton";
import { DisableButton } from "./DisableButton";
import { InputField } from "./InputField";
import { OperationDropdown } from "./OperationDropdown";

export const Row = (props) => {

    const { row } = props;

    //handle user click on delete button
    const handleDeleteClick = () => {
        //call parent prop
        props.deleteRow(row);
    };

    //handle user click on disable button 
    const handleDisableClick = () => {
        //call parent prop
        props.toggleDisableRow(row);
    };

    //handle when user enter value in the input box
    const handleOnChangeValue = (value) => {
        //call parent prop
        props.updateRowByValue(row,value);
    };

    //handle when user change operation from select box
    const handleOnChangeOperation = (value) => {
        //call parent prop
        props.updateRowByOperation(row,value);
    };

    // return entire row HTML
    return (
        <li >
            <OperationDropdown onChange={handleOnChangeOperation} isDisabled={row.isDisabled}/>
            <InputField onChange={handleOnChangeValue} isDisabled={row.isDisabled}/>
            <DisableButton onClick={handleDisableClick} isDisabled={row.isDisabled}/>
            <DeleteButton onClick={handleDeleteClick}/>
        </li>
    );
}